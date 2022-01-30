import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../Assets/SCSS/Registratsiya.scss';


function RegistratsiyaBir() {
    window.localStorage.setItem("login", "xoja");

    const navigate = useNavigate();
    const login = useRef();

    const handleNavigate = () =>
    {
        let getLogin = window.localStorage.getItem("login");
        if(login.current.value === getLogin){
            navigate("/login/two");
        }else{
            login.current.style = "border: 1px solid red; color: red";
            login.current.focus();
        }
    }

  return (
    <div className="block">
        <h3>Бесплатная регистрация</h3>
        <form action="#" className="form">
            <input type="text" ref={login} placeholder='xoja deb yozing' />
            <button type='submit' onClick={() => handleNavigate()}>Далее</button>
        </form>
        <div className="box">
            <span></span>
            <p>или</p>
            <span></span>
        </div>
        <div className="link-content">
            <Link to={"/login"} className='link' >Войдите в систему, если у вас уже есть аккаунт kivi.uz</Link>
        </div>
    </div>
  );
}

export default RegistratsiyaBir;
