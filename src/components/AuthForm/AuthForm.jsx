import { useEffect, useState } from 'react';
import { AuthButton } from '../Buttons';
import { InputPassword, InputText } from '../Input';
import { Max, Min, Required } from '../../utils/Validation';
import './styles.scss';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');
  const MSG_1 = 'Поле обязательно для заполнения';

  const formSubmitHandler = (e) =>{
    e.preventDefault();
    setEmailError(Required(email, MSG_1)||
                Max(email, 64, 'Максимальная длина 64 символа')||
                Min(email, 10, 'Минимальная длина 10 символов'));
    setPassError(Required(pass, MSG_1) ||
                Max(pass, 15, 'Максимальная длина 15 символа')||
                Min(pass, 8, 'Минимальная длина 8 символов'));
  }

  useEffect(()=>{
    if (!emailError && !passError) console.log(email, pass);
  },[emailError, passError])

  return (
    <form className="auth-form" onSubmit={formSubmitHandler}>
      <h1 className="auth-title">Авторизация</h1>
      <InputText value={email} placeholder='Имя пользователя' label='Имя пользователя' error={emailError} onChange={(e)=>setEmail(e.target.value)}/>
      <InputPassword value={pass} placeholder='Пароль' label='Пароль' error={passError} onChange={(e)=>setPass(e.target.value) }/>
      <AuthButton text='авторизоваться'/>
    </form>
  )
}

export default AuthForm