import React from 'react';
import ReactDOM from 'react-dom/client';

import { AddFill } from '../../src'; // ライブラリのインポート

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AddFill size="200" color="green" />
  </React.StrictMode>
);
