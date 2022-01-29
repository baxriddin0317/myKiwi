import React from 'react';
import './Footer.scss';
import SiteLogo from '../../Libry/SiteLogo';
import App from '../../Assets/Img/App.png'
import Android from '../../Assets/Img/android.png'
function Footer() {
  return <div className='footer'>
      <div className="container">
          <div className="footer__block">
                <div className="footer__box">
                    <SiteLogo />
                    <span>
                        Продай, найди, купи 
                        все что ты пожелаешь 
                    </span>
                </div>
                <span className="footer__text">
                Веб сайт бесплатных обьявлений | на базе 
имеется 234 944 999 шт обяления
                </span>
                <div className="footer__links">
                    <a href="https://www.apple.com/">
                        <img src={App} alt="" />
                    </a>
                    <a href="https://www.google.co.uz/?hl=uz">
                        <img src={Android} alt="" />
                    </a>
                </div>
          </div>
      </div>
  </div>;
}

export default Footer;

