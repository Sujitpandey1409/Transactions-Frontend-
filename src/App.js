import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Signup from './component/Signup';
import Home from './pages/Home';
import Transfer from './pages/Transfer';
import Transactions from './pages/Transactions';
export const deployed_url = 'https://transactions-backend.onrender.com/api/'

function App() {
  const BASE_URL = 'http://localhost:8081/api/'
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/transfer' element={<Transfer/>} />
        <Route path='/transactions' element={<Transactions/>} />
      </Routes>
    </div>
  );
}

export default App;
