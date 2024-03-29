// src/mocks/browser.js
import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';
const worker = setupWorker(...handlers);
worker.start();

export { worker };