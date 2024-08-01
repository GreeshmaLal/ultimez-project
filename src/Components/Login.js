import axios from "axios"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://lobster-app-ddwng.ondigitalocean.app/user/login',
        { login_id: email, password: password },
        {
          headers: {
            'api_key': 'Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH',
          },
        }
      );
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error', error);
    }
  };
  const onChangeHandler = (e) => {
    if (e?.currentTarget?.dataset?.type === 'email') {
      setEmail(e?.target?.value)
    }
    else {
      setPassword(e?.target?.value)
    }
  }
  const goToSignUp = () => {
    navigate('/SignUp')
  }
  return (
    <>
      <div className="app">
        <form onSubmit={onSubmitHandler}>
          <input placeholder="Email" value={email} data-type='email' onChange={onChangeHandler} />
          <input placeholder="Password" value={password} data-type='password' onChange={onChangeHandler} />
          <button type="submit" onClick={onSubmitHandler}>Sign In</button>
          <div className="d-flex">Don't you have an account?<div className="cursor-pointer" onClick={goToSignUp}>Signup</div></div>
        </form>
      </div>
    </>
  )
}

export default Login