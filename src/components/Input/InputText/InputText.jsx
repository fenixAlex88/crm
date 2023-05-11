import '../styles.scss';

export const InputText = ({value, label = null, placeholder = null, onChange = null, error = null}) => {
  return (
    <div className={error ? 'error': null}>
        <label className="auth-label">{label}
            <input type="text" value={value} autocomplete="off" placeholder={placeholder} class="auth-input" onChange={(e)=>onChange(e)}/>
        </label>
        {error && <div className="errorMessage">{error}</div>}
    </div>
  )
}