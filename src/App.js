import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <h1>Router</h1>
      <Outlet />
      <p>Footer</p>
    </div>
  );
}

export default App;
