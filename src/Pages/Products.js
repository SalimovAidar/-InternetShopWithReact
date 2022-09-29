import './Products.css';
import { products } from '../products';
import Card from '../components/elements/card';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Button from '../components/ui/button';
import { setIsNotAuth } from '../store/reducers/auth';
import { clearProducts } from '../store/reducers/basket';


function Products() {

  // const [sumProducts, setSumProducts] = useState(0);
  // const [numberProducts, setNumberProducts] = useState(0);

  // const abc = (price) => {
  //   setSumProducts(sumProducts + +price)
  //   setNumberProducts(numberProducts + 1)
  // }

  const navigate = useNavigate();

  const dispatch = useDispatch();

  let checkUser = useSelector(state => state.auth.isAuth);

  const count = useSelector(state => state.basket.count)

  const priceProducts = useSelector(state => state.basket.priceProducts)

  const exit = () => {
      dispatch(setIsNotAuth());
      dispatch(clearProducts());
      console.log(checkUser);
      navigate("/entrance");
  }

  return (
    <main className="main">
      <div className="container">
        <header className='header'>
          <h1 className='header_title'>
            наша продукция
          </h1>
          <div className="header_description">
            <div className="header_text">
              <p className='header_number'>
                {count}&nbsp;товара
              </p>
              <p className='header_price'>
                на&nbsp;сумму {priceProducts} ₽
              </p>
            </div>
            <Link to='/basket' className='header_link'>
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="25" fill="#D58C51" />
                <g clipPath="url(#clip0_1_429)">
                  <path d="M34.0746 23.2042H30.1774L27.379 15.239C27.2096 14.7569 26.6815 14.5032 26.1992 14.6727C25.717 14.8421 25.4635 15.3703 25.6329 15.8525L28.2157 23.2041H20.7843L23.3671 15.8525C23.5365 15.3703 23.283 14.8421 22.8008 14.6727C22.3187 14.5032 21.7904 14.7569 21.621 15.239L18.8226 23.2042H14.9254C14.4143 23.2042 14 23.6184 14 24.1296C14 24.6406 14.4143 25.0549 14.9254 25.0549H15.1789L17.4465 33.3309C17.6163 33.9505 18.1793 34.38 18.8217 34.38H30.2413C30.8871 34.38 31.4522 33.946 31.6189 33.3221L33.8274 25.0549H34.0746C34.5857 25.0549 35 24.6406 35 24.1296C35 23.6185 34.5857 23.2042 34.0746 23.2042ZM21.4678 31.355C21.4678 31.866 21.0535 32.2803 20.5425 32.2803C20.0314 32.2803 19.6171 31.866 19.6171 31.355V26.6562C19.6171 26.1451 20.0314 25.7308 20.5425 25.7308C21.0535 25.7308 21.4678 26.1451 21.4678 26.6562V31.355ZM25.4254 31.355C25.4254 31.866 25.011 32.2803 24.5 32.2803C23.9889 32.2803 23.5746 31.866 23.5746 31.355V26.6562C23.5746 26.1451 23.9889 25.7308 24.5 25.7308C25.011 25.7308 25.4254 26.1451 25.4254 26.6562V31.355ZM29.3829 31.355C29.3829 31.866 28.9686 32.2803 28.4575 32.2803C27.9464 32.2803 27.5321 31.866 27.5321 31.355V26.6562C27.5321 26.1451 27.9464 25.7308 28.4575 25.7308C28.9686 25.7308 29.3829 26.1451 29.3829 26.6562V31.355Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_1_429">
                    <rect width="21" height="21" fill="white" transform="translate(14 14)" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Button handleClick={exit}
              buttonClass={"about_button"}
              name={'Выйти'}
            />
          </div>
        </header>
        <div className="menu">
          {products.map(card => {
            const { id, url, descr, title, text, price, weight } = card;
            return (
              <Link to={`/${id}`} key={id} className='menu_link'>
                <Card
                  id={id}
                  url={url}
                  descr={descr}
                  title={title}
                  text={text}
                  price={price}
                  weight={weight}
                />
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  );
}

export default Products;


// id2={id1}




/* <Card
    url={'/img/card__1.png'}
    descr={'Устрицы по рокфеллеровски'}
    title={'Устрицы по рокфеллеровски'}
    text={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры'}
    price={'2 700 ₽'}
    weight={'/ 500 г.'}
/>
<Card
    url={'/img/card__2.png'}
    descr={'Свиные ребрышки на гриле с зеленью'}
    title={'Свиные ребрышки на гриле с зеленью'}
    text={'Не следует, однако забывать, что реализация намеченных плановых'}
    price={'1 600 ₽'}
    weight={'/ 750 г.'}
/>
<Card
    url={'/img/card__3.png'}
    descr={'Креветки по-королевски в лимонном соке'}
    title={'Креветки по-королевски в лимонном соке'}
    text={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу'}
    price={'1 820 ₽'}
    weight={'/ 7 шт.'}
/>
<Card
    url={'/img/card__1.png'}
    descr={'Устрицы по рокфеллеровски'}
    title={'Устрицы по рокфеллеровски'}
    text={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры'}
    price={'2 700 ₽'}
    weight={'/ 500 г.'}
/>
<Card
  url={'/img/card__1.png'}
  descr={'Устрицы по рокфеллеровски'}
  title={'Устрицы по рокфеллеровски'}
  text={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры'}
  price={'2 700 ₽'}
  weight={'/ 500 г.'}
/>
<Card
  url={'/img/card__2.png'}
  descr={'Свиные ребрышки на гриле с зеленью'}
  title={'Свиные ребрышки на гриле с зеленью'}
  text={'Не следует, однако забывать, что реализация намеченных плановых'}
  price={'1 600 ₽'}
  weight={'/ 750 г.'}
/>
<Card
  url={'/img/card__3.png'}
  descr={'Креветки по-королевски в лимонном соке'}
  title={'Креветки по-королевски в лимонном соке'}
  text={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу'}
  price={'1 820 ₽'}
  weight={'/ 7 шт.'}
/>
<Card
  url={'/img/card__1.png'}
  descr={'Устрицы по рокфеллеровски'}
  title={'Устрицы по рокфеллеровски'}
  text={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры '}
  price={'2 700 ₽'}
  weight={'/ 500 г.'}
/>  */