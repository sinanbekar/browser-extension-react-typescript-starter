import { exec, execSync } from 'child_process';
import * as fs from 'fs';
import * as glob from 'glob';
import { get as getKeyValue, set as setKeyValue } from 'lodash';
import { basename, dirname, parse, resolve } from 'path';
import type { PluginOption } from 'vite';

function removeSrcFromHtmlPaths(): PluginOption {
  let config;
  return {
    name: 'remove-src-from-html-paths',
    enforce: 'post',
    apply: 'build',

    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },

    closeBundle() {
      const outDir = resolve(config.build.outDir);
      const manifestPath = resolve(outDir, 'manifest.json');
      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8')); // TODO: typing

      const processManifestKey = (key: string) => {
        const filePath = getKeyValue(manifest, key) as string;
        if (!filePath) return;

        const parsedPath = parse(filePath);
        if (parsedPath.ext !== '.html') return;

        let destDir = parsedPath.base;
        if (destDir === 'index.html') {
          destDir = `${basename(dirname(filePath))}.html`; // e.g: options/index.html to options.html
        }
        fs.renameSync(resolve(outDir, filePath), resolve(outDir, destDir));
        setKeyValue(manifest, key, destDir);
      };

      for (const key of [
        'action.default_popup',
        'options_ui.page',
        'options_page',
        'devtools_page',
        'chrome_url_overrides',
        'web_accessible_resources',
      ]) {
        if (key === 'web_accessible_resources') {
          // eslint-disable-next-line  @typescript-eslint/no-explicit-any
          for (const [index, obj] of Object.entries<any>(manifest[key])) {
            for (const [resourceIndex] of Object.entries(obj.resources)) {
              processManifestKey(`web_accessible_resources[${index}].resources[${resourceIndex}]`);
            }
          }
        } else {
          processManifestKey(key);
        }
      }

      if (glob.sync(`${config.build.outDir}/src/**/*.html`).length > 0) {
        exec(`rimraf ${config.build.outDir}`);
        throw new Error(
          'Something went wrong. Files found in src folder, please open an issue in GitHub.'
        );
      } else {
        fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
        execSync(`rimraf ${config.build.outDir}/src`);
      }
    },
  };
}

export default removeSrcFromHtmlPaths;
