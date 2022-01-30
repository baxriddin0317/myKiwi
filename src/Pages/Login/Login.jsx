import React from 'react';
import './Login.scss';
import Kivi from '../../Assets/Img/kivi.png';
import { Link, Route, Routes } from 'react-router-dom';
import RegistratsiyaBir from '../../Componetns/registratsiyaBir/RegistratsiyaBir';
import RegistratsiyaIkki from '../../Componetns/Registratsiyaikki/RegistratsiyaIkki';

function Login() {
  return (
      <div className="login">
          <div className="container login__block">
              <div className="login__content">
                <Routes>
                    <Route path="/" element={<RegistratsiyaBir />}/>
                    <Route path="/two" element={<RegistratsiyaIkki />}/>
                    <Route path="/tree" element={"uch"}/>
                </Routes>
              </div>
              <div className="login__box">
                <div className="login__box-div">
                    <img src={Kivi} alt="logo" />
                    <p className="login__box-text">
                        Откройте для себя 
                        целую плошадку
                        для продаже
                    </p>
                    <Link to={"/login"} className='login__box-link'>Как это делать?</Link>
                </div>
              </div>
          </div>

      </div>
  );
}

export default Login;
