import './App.scss';
import Header from './Componetns/Header/Header';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/login" element={<Login /> } />
      </Routes>
    </div>
  );
}

export default App;
