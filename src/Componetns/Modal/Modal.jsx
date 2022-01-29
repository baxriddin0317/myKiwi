import React from 'react';
import './Modal.scss';
import { Link } from 'react-router-dom';

function Modal({newArr, setModal}) {

   return (
        <div className="modal" onClick={() => setModal(false)}>
          <div className="container">
            <div className="modal__befor">
                
                </div>
                <div className="modal__content">
                {newArr.length > 0 && <ul className='modal__list'>
                    {newArr.map(arr => (
                        <li className="modal__list-item" key={arr.id}>
                            <Link to="/">{ arr.name }</Link>
                        </li>
                    ))
                    }      
                </ul>
                }
            </div>
          </div>
      </div>
  );
}

export default Modal;
