import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Signup from './component/Signup';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
