import { useState } from 'react';
import '../styles.scss';

export const InputPassword = ({value, label = null, placeholder = null, onChange = null, error = null}) => {
  const [viewPass, setViewPass] = useState(false);

  return (
    <div className={error ? 'error': null}>
        <label className="auth-label">{label}
          <input type={viewPass?"text":"password"} value={value} autocomplete="off" placeholder={placeholder} className="auth-input" onChange={(e)=>onChange(e)}/>
          <button type='button' className={`showPass_btn${viewPass? ' eye-off' : ' eye'}`} onClick={()=>setViewPass(!viewPass)}></button>
        </label>
        {error && <div className="errorMessage">{error}</div>}
    </div>
  )
}