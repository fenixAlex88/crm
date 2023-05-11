import '../styles.scss';
export const AuthButton = ({text, clickHandler = null}) => {
  return (
    <button type="submit" className="auth-btn" onClick={clickHandler}>{text}</button>
  )
}
