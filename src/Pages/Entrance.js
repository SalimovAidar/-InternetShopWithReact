import './Entrance.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Button from '../components/ui/button';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setIsAuth } from '../store/reducers/auth';
import { useNavigate } from "react-router-dom";


function Entrance() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector(state => state.user.users);

  let checkUser = useSelector(state => state.auth.isAuth);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = data => {
    let findUser = user.find(item => item.Login === data.Login);
    if (findUser && (findUser.Password === data.Password))
    {
      dispatch(setIsAuth());
      console.log(checkUser);
      navigate("/products");
    }
    else {
      console.log(checkUser);
    }
    reset();
  };

  return (
    <div className='entrance'>
      <form onSubmit={handleSubmit(onSubmit)} className="entrance_container">
        <Link to='/' className='entrance_link'>
          <span>
            Зарегестрироваться
          </span>
        </Link>
        <h1 className="entrance-title">
          Вход
        </h1>
        <div className="container">
          <div className="login">
            <input placeholder='Логин' className='login_input input'
              {...register('Login', {
                required: "Поле не должно быть пустым",
              })}
            />
            {errors?.Login && <p className='login_attention attention'>{errors?.Login?.message}</p>}
          </div>
          <div className="password">
            <input placeholder='Пароль' className='password_input input' type='password'
              {...register('Password', {
                required: "Поле не должно быть пустым",
              })}
            />
            {errors?.Password && <p className='password_attention attention'>{errors?.Password?.message}</p>}
          </div>
          <div className="argeement">
            <input type="checkbox" className="check__input" id="agreement"
              {...register('Argeement', {
                required: "Поле не должно быть пустым",
              })}
            />
            <label className="check__label" htmlFor="agreement"> Я согласен получать обновления на почту</label>
            {errors?.Argeement && <p className='password_attention attention'>{errors?.Argeement?.message}</p>}
            <p className="argeement_attention attention">
              Логин и пароль неверен
            </p>
          </div>
        </div>
        <div className="entrance_button-container">
          <Button
            buttonClass={"entrance_button"}
            name={'Войти'}
          />
        </div>
      </form>
    </div>
  )
}

export default Entrance;


//         <div className="container">
//           <h1 className="entrance-title">
//             Вход
//           </h1>
//           <div className="login">
//             <input type="text" placeholder="Логин" required className="login_input input" />
//             <p className="login_attention attention">
//               Поле не должно быть пустым
//             </p>
//           </div>
//           <div className="password">
//             <input type="password" placeholder="Пароль" required className="password_input input" />
//             <p className="password_attention attention">
//               Поле не должно быть пустым
//             </p>
//           </div>
//
          // <Button handleClick={'asfknak'}
          //   buttonClass={"entrance_button"}
          //   name={'Войти'}
          // />
//         </div> 