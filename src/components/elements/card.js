import React from 'react';
import './card.css';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/reducers/basket';
import { v4 as uuidv4 } from 'uuid';

function Card({ id, url, descr, title, text, price, weight }) {

  const dispatch = useDispatch()

  let item = {
    productId: id,
    url: url,
    descr: descr,
    title: title,
    price: price,
    weight: weight,
  }

  const handleAddProduct = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addProduct({
      // ...item, id3: uuidv4()
      ...item, id: uuidv4()
    }));
  }

  return (
    <div className="card">
      <div className="card_container">
        <div className="card_description">
          <img className="card_img" src={url} alt={descr} />
          <h2 className="card_title">
            {title}
          </h2>
          <p className="card_text">
            {text}
          </p>
        </div>
        <div className="card_info">
          <div className="card_cost">
            <span className="card_price">
              {price}
            </span>
            <span className="card_weight">
              {weight}
            </span>
          </div>
          <button onClick={handleAddProduct} className="card_button">
            <svg className='card_svg' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="14.5" stroke="white" />
              <path d="M15 9.28564V20.3571" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M20.3569 14.8214L9.28551 14.8213" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;