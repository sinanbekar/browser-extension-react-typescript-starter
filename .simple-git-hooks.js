module.exports = {
  'commit-msg': 'yarn commitlint --edit $1',
  'prepare-commit-msg': `grep -qE '^[^#]' .git/COMMIT_EDITMSG || (exec < /dev/tty && yarn cz --hook || true)`,
  'pre-commit': './node_modules/.bin/nano-staged',
};
