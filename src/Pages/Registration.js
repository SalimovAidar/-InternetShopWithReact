import './Registration.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Button from '../components/ui/button';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/reducers/user';
import { useNavigate } from "react-router-dom";

function Registration() {

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = data => {
    dispatch(addUser(data));
    navigate("/entrance");
    reset();
  };

  return (
    <div className='entrance'>
      <form onSubmit={handleSubmit(onSubmit)} className="entrance_container">
        <Link to='/entrance' className='registration_link'>
          <span>
            Авторизоваться
          </span>
        </Link>
        <h1 className="entrance-title">
          Регистрация
        </h1>
        <div className="container">
          <div className="login">
            <input placeholder='Логин' className='login_input input'
              {...register('Login', {
                required: "Поле не должно быть пустым",
                minLength: {
                  value: 4,
                  message: 'Логин должен содержать не менее 4-х символов',
                }
              })}
            />
            {errors?.Login && <p className='login_attention attention'>{errors?.Login?.message}</p>}
          </div>
          <div className="password">
            <input placeholder='Пароль' className='password_input input' type='password'
              {...register('Password', {
                required: "Поле не должно быть пустым",
                minLength: {
                  value: 4,
                  message: 'Пароль должен содержать не менее 4-х символов',
                }
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
          </div>
        </div>
        <div className="entrance_button-container">
          <Button 
            buttonClass={"entrance_button"}
            name={'Зарегестрироваться'}
          />
        </div>
      </form>
    </div>



  )
}

export default Registration;



//  <div className='registration entrance'>
//       <div className="registration_container entrance_container">
//         <Link to='/' className='registration_link'>
//           <span>
//             Авторизоваться
//           </span>
//         </Link>
//         <div className="container">
//           <h1 className="registration-title entrance-title">
//             Регистрация
//           </h1>
//           <div className="login">
//             <input type="text" placeholder="Логин" required className="login_input input" />
//             <p className="login_attention attention">
//               Поле не должно быть пустым
//             </p>
//             <p className="login_attention-lenght attention">
//               Логин должен содержать не менее 4-х символов
//             </p>
//           </div>
//           <div className="password">
//             <input type="password" placeholder="Пароль" required className="password_input input" />
//             <p className="password_attention attention">
//               Поле не должно быть пустым
//             </p>
//             <p className="password_attention-lenght attention">
//               Пароль должен содержать не менее 4-х символов
//             </p>
//           </div>
//           <div className="argeement">
//             <form class="check">
//               <input type="checkbox" class="check__input" id="agreement" />
//               <label class="check__label" for="agreement"> Я согласен получать обновления на почту</label>
//             </form>
//           </div>
//           <Button handleClick={'asfknak'}
//             buttonClass={"entrance_button"}
//             name={'Зарегестрироваться'}
//           />
//         </div>
//       </div>
//     </div>