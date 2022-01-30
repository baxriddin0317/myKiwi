import React from 'react';
import './Detailed.scss';
import { Link, useParams } from 'react-router-dom';
import Data from "../../Assets/Baza/MOCK_DATA.json";
import Latest from '../../Componetns/Latest/Latest';

function Detailed() {
    const {id} = useParams();

    const obj = Data.find((obj) => obj.id == id);

  return (
      <div className="detailed">
          <div className="container">
            <h2 className="detailed__title">{obj.last_name}</h2>

            <div className="detailed__block">
                <div className="detailed__block-imgs">
                    <div>
                        <img src={`https://picsum.photos/id/${obj.id}/200/300`} alt="" />
                        <img src={`https://picsum.photos/id/${obj.id}0/200/300`} alt="" />
                        <img src={`https://picsum.photos/id/${obj.id}2/200/300`} alt="" />
                        <img src={`https://picsum.photos/id/${obj.id}5/200/300`} alt="" />
                        <img src={`https://picsum.photos/id/${obj.id}6/200/300`} alt="" />
                    </div>
                    <img src={obj.imgUrl} alt="" />
                </div>
                <div className="detailed__block-info">
                    <div className="detailed__block-head">
                        <span>Артикул: 4418970</span>
                        <span>обновлено: {obj.data} добавлено: {obj.data}</span>
                    </div>
                    <p className="detailed__block-money">
                        {obj.money} 
                    </p>

                    <Link to={`/product/${obj.id}`} className='detailed__block-link'>Ташкент, Ташкентская область, Юнусабадский район</Link>
                    
                    <div className='detailed__block-tel'>
                        <span>99893241****</span>
                        <button>Покозать польностю</button>
                    </div>
                    <div className='detailed__block-tel'>
                        <span>99893241****</span>
                        <button>Покозать польностю</button>
                    </div>

                    <div className="detailed__block-avtor">
                        <span>Автор обьявлении: </span>
                        <Link to={""}>Xo`ja</Link>
                    </div>

                    <div className="detailed__block-btns">
                        <button>Написать автору</button>
                        <button>Предложить свою цену</button>
                    </div>

                    <p>Срочно продаётся 3х ком на 1 этоже 7 этажном кирпичном доме. Новостройка Голден Хаус жылой комплекс Етти Чинор Очень качественный и дорогой ремонт. Комнаты полнастю разделные болшые. 2 сан узла. Для лишних вещей есть кладовка.Ремонт шыкарный обсалютно новый. 

Ремонт делолся из очень дорогова материяла. Дорогая класическая кухонная мебель. Джаккузи,Тёплые полы в каждой комнате. Дорогие люстры вовсех комнатах решодки на окнах. Теретория охранается. Всё предусмотренно для детей деские площядки качели итд. Торг наместе. Торопитесь продаю нужны денги. Первый золотой этаж и паследний в этом коплексе. Торопитесь.</p>
                </div>
            </div>
          </div>

          <Latest />
      </div>
  );
}

export default Detailed;
