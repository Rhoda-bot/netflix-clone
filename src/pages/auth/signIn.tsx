import axios from 'axios';
import { useEffect, useState } from 'react';
import './signIn.styles.scss';

const SignIn = () => {
  const initials = {
    email: '',
    password: ''
  }
  const [inputValue, setInputValues] = useState(initials);
  useEffect(() =>{
    axios.get('authentication/token/new?api_key=a495d3cd0cf478c71fd3590344b481b9').then(res => {  
    if (res.data.success) {
      console.log(res.data);
      localStorage.setItem('token', res.data.request_token);
    }
    })
  }, [])
  const handleInput =  (e: any) =>{
    const {name, value} = e.target;
    setInputValues({...inputValue, [name]:value})
  }
  const handleSubmit = async () => {
    const { email, password } = inputValue;
    const getToken = JSON.stringify(localStorage.getItem('token'));
    const newToken = getToken.toString().slice(1, 41);
    axios.post("authentication/token/validate_with_login?api_key=a495d3cd0cf478c71fd3590344b481b9", {email, password, getToken}).then(res => {
      console.log(res.data);   
    });
  }
  const { email, password } = inputValue;
    return(
        <>  
          <div className="login">
            <div className="container">
              <div className="row justify-content-center mx-auto">
                <div className="col-md-4">
                <form action="#" className="login__form">
                    <h1>Sign In</h1>
                    <div className="form-element">
                      <input type="text" name="username" id="username" required />
                      <label className="floating-label" htmlFor="username">Email or Phone Number</label>
                    </div>
                    <div className="form-element">
                      <input type="password" name="password" id="password" required />
                      <label className="floating-label" htmlFor="password">Password</label>
                    </div>
                    <button className="btns">Sign In</button>
                  <div className="login__form--bottom pt-4">
                    <div className="mb-2">
                      <span className='span'>New to Netflix?</span> <b>Sign up now.</b>
                    </div>
                      <p className="login__form--text">This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href='/'>Learn more.</a></p>
                  </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="login__footer">
              <div className="container">
              <div className="row">
                            <div className="col-md-3">
                                <ul>
                                    <li>FAQ</li>
                                    <li>Cookie Preferences</li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                            <ul>
                                    <li>Help Center</li>
                                    <li>Corporate Information</li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul>
                                    <li>Terms of Use</li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul>
                                    <li>Privacy</li>
                                </ul>
                            </div>
                    </div>
              </div>
            </div>
          </div>
        </>
    )
}
export default SignIn
 