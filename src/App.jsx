import './App.scss';
import Header from './Componetns/Header/Header';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login/Login';
import Footer from './Componetns/Footer/Footer';
import Detailed from './Pages/Detailed/Detailed';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/login/*" element={<Login /> } />
        <Route path="/product/:nomir" element={<Detailed /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
