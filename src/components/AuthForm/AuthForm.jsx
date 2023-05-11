import { useEffect, useState } from 'react';
import { AuthButton } from '../Buttons';
import { InputPassword, InputText } from '../Input';
import { Required } from '../../utils/Validation';
import './styles.scss';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');
  const MSG_1 = 'Поле обязательно для заполнения';

  const formSubmitHandler = (e) =>{
    e.preventDefault();
    setEmailError(prev=>Required(email, MSG_1));
    setPassError(prev=>Required(pass, MSG_1))
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