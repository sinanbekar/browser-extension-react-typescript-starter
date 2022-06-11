import React, { ReactElement } from 'react';

import { Counter } from './features/counter';

const Content = (): ReactElement => {
  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 999,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgb(0 0 0 / 30%)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>Content Example</div>
      <Counter />
    </div>
  );
};

export default Content;
