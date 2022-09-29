import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/reducers/basket';
import { v4 as uuidv4 } from 'uuid';
import Button from '../ui/button';
import './cardInfo.css';


function CardInfo({ id, url, descr, title, text, price, weight }) {

  const dispatch = useDispatch()

  let item = {
    url: url,
    descr: descr,
    title: title,
    text: text,
    price: price,
    weight: weight,
  }

  const handleAddProduct = () => {
    dispatch(addProduct({
      ...item, id: uuidv4()
    }));
  }

  return (
    <div className="info">
      <img className="info_img" src={url} alt={descr} />
      <div className="info_right">
        <h2 className="info_title">
          {title}
        </h2>
        <p className="info_text">
          {text}
        </p>
        <div className="info_descr">
          <div className="info_sum">
            <span className="info_price">
              {price}
            </span>
            <span className="info_weight">
              {weight}
            </span>
          </div>
          <Button 
            handleClick={handleAddProduct}
            buttonClass={"about_add"}
            name={'В корзину'}
          />
        </div>
      </div>
    </div>
  );
}

export default CardInfo;