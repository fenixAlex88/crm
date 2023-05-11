import './styles.scss';
import logoImg from '../../assets/logo.png';
import AuthForm from '../../components/AuthForm/AuthForm';

const AuthPage = () => {
  return (
    <div class="container">
    <div class="auth">
        <div class="auth-logo"><img src={logoImg} alt="" class="logo-img"/></div>
        <AuthForm/>
        <div><a href="/#" class="auth-link">Забыли пароль?</a></div>
    </div>
</div>
  )
}

export default AuthPage