import './CardDescr.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../components/ui/button';
import CardInfo from '../components/elements/cardInfo';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../products';
import { useDispatch } from 'react-redux';
import { setIsNotAuth } from '../store/reducers/auth';
import { clearProducts } from '../store/reducers/basket';




function CardDescr() {

  const navigate = useNavigate();

  const { id } = useParams();

  const post = products.find(item => item.id === id)

  const count = useSelector(state => state.basket.count)

  const priceProducts = useSelector(state => state.basket.priceProducts)

  const goBack = () => navigate(-1)

  const dispatch = useDispatch();

  let checkUser = useSelector(state => state.auth.isAuth);

  const exit = () => {
    dispatch(setIsNotAuth());
    dispatch(clearProducts());
    console.log(checkUser);
    navigate("/entrance");
}

  return (
    <main className='about'>
      <div className="about_container">
        <header className="about_header">
          <Button 
            handleClick={goBack}
            buttonClass={"back-button"}
            name={<svg className='about_svg' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <div className="about_products">
            <div className="about_info">
              <p className='about_text'>
                {count}&nbsp;товара
              </p>
              <p className='about_sum'>
                на&nbsp;сумму {priceProducts} ₽
              </p>
            </div>
            <Link to='/basket' className='about_basket'>
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
        <div className="about_descr">
          <CardInfo
            key={post.id}
            id={post.id}
            url={post.url}
            descr={post.descr}
            title={post.title}
            text={post.text}
            price={post.price}
            weight={post.weight}
          />
        </div>
      </div>
    </main>
  )
}

export default CardDescr;