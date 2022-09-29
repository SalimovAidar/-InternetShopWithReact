import './Basket.css';
import BasketLayout from '../components/elements/basketLayout';
import Button from '../components/ui/button';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsNotAuth } from '../store/reducers/auth';
import { clearProducts } from '../store/reducers/basket';
import { useDispatch } from 'react-redux';

function Basket() {

  const basket = useSelector(state => state.basket.basket);

  const priceProducts = useSelector(state => state.basket.priceProducts);

  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const dispatch = useDispatch();

  let checkUser = useSelector(state => state.auth.isAuth);

  const exit = () => {
      dispatch(setIsNotAuth());
      dispatch(clearProducts());
      console.log(checkUser);
      navigate("/entrance");
  }


  return (
    <main className="main">
      <div className="bskt">
        <div className="bskt_header">
          <Button
            handleClick={goBack}
            buttonClass={"bskt_button"}
            name={<svg className='bskt_svg' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="15.5" transform="rotate(180 16 16)" stroke="#D58C51" />
              <g clipPath="url(#clip0_7057_2)">
                <path d="M14.6517 13.0468C14.787 12.9115 15.0001 12.9115 15.1354 13.0468C15.2662 13.1776 15.2662 13.3952 15.1354 13.5257L12.6825 15.9786H20.7767C20.9654 15.9786 21.1202 16.1286 21.1202 16.3172C21.1202 16.5059 20.9654 16.6608 20.7767 16.6608H12.6825L15.1354 19.1091C15.2662 19.2444 15.2662 19.4624 15.1354 19.5928C15.0001 19.7282 14.787 19.7282 14.6517 19.5928L11.6181 16.5593C11.4873 16.4285 11.4873 16.2109 11.6181 16.0804L14.6517 13.0468Z" fill="#D58C51" />
              </g>
              <defs>
                <clipPath id="clip0_7057_2">
                  <rect width="9.6" height="9.6" fill="white" transform="translate(11.52 11.52)" />
                </clipPath>
              </defs>
            </svg>}
          />
          <h1 className='bskt_title'>
              Корзина с выбранными товарами
            </h1>
            <Button handleClick={exit}
              buttonClass={"about_button"}
              name={'Выйти'}
            />
        </div>
        <div className="bskt_list">
          {basket.map(item => {
            const { productId, id, url, descr, title, price, weight } = item;
            // id3
            return (
              <Link to={`/${productId}`} key={id} className='bskt_card'>
                <BasketLayout
                  id={id}
                  // id4={id3}
                  url={url}
                  descr={descr}
                  title={title}
                  price={price}
                  weight={weight}
                />
              </Link>
            )
          })}
        </div>
      </div>
      <footer className="bskt_footer">
        <div className="bskt_asd">
          <div className="bskt_info">
            <span className="bskt_text">
              Заказ на сумму:
            </span>
            <span className="basket_price">
              {priceProducts} ₽
            </span>
          </div>
          <Button
            buttonClass={"button"}
            name={'Оформить заказ'}
          />
        </div>
      </footer>
    </main>
  );
}

export default Basket;