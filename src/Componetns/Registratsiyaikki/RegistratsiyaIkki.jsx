import { ArrowBackIos } from '@mui/icons-material';
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../Assets/SCSS/Registratsiya.scss';

function RegistratsiyaIkki() {
    let email = useRef();
    window.localStorage.setItem("email", "xoja@gmail.com");

    const handleBtn = () => {
      const getEmail = window.localStorage.getItem("email");
      if(getEmail === email.current.value){
        navigate("/login/tree");
      }else{
        email.current.style = "border: 1px solid red; color: red";
        email.current.focus();
      }
    }

    const navigate = useNavigate();

  return (
      <div className='block'>
          <h3>Бесплатная регистрация</h3>
          
            <form action="#" className="form">
                <label htmlFor="email">Введите ваш email</label>
                <input ref={email} type="email" placeholder='xoja@gmail.com deb yozing' id='email' />
                <label htmlFor="content">Введите ваш номер телефона</label>
                <div className="form__content" id='content'>
                    <input type="tel" placeholder='998' className='telCode' />

                    <input type="tel" placeholder='932414278' className='telNomer' />
                </div>
               
                <p>
                  <Link to={"/login/two"}>Нажимая на кнопку «Получить доступ», я даю согласие на обработку персональных данных и соглашаюсь c условиями </Link>
                  договора-оферты и политикой конфиденциальности
                </p>

                <div className="btn__box">
                    <button className='whiteBtn' onClick={() => navigate("/login")}> <ArrowBackIos className='icon' /> </button>
                    <button className='btn' onClick={() => handleBtn()}>Получить доступ</button>
                </div>
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

export default RegistratsiyaIkki;
