// src/index.js or src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

async function deferRender(){
  const {worker} = await import("./mocks/browser");
  return worker.start();
}
deferRender().then(()=>{
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
})
