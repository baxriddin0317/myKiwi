import React from 'react';
import './offers.scss';
import Offer from '../../Assets/Baza/Offers';
import { ArrowForwardIos } from '@mui/icons-material';

function Offers() {
  return (
      <div className="offers">
          <div className="container">
              <ul className="offers__content">
                  {Offer.map(obj => (
                    <li className="offers__content-item" style={{background: obj.colorOne} } key={Math.random()*1000} >
                        <span className="offers__content-item-before" style={{background: obj.colorBefore}}></span>
                        <div className="offers__content-item-box">
                        <h3>{obj.title}</h3>
                        <span>987 обьявлениий <ArrowForwardIos className='forward' /></span>
                        </div>
                        <img src={obj.img} alt="" />
                    </li>
                  ))}
              </ul>
          </div>
      </div>
  );
}

export default Offers;
