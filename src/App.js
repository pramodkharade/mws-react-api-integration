import logo from './logo.svg';
import './App.css';
import { worker } from './mocks/browser';
import Cart from './components/Cart';
if (process.env.NODE_ENV == 'development') {
  worker.start()
}


function App() {
  return (
    <Cart></Cart>
    );
}

export default App;
