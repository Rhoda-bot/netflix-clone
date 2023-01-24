import axios from 'axios';
import { useEffect, useState } from 'react';
import './signIn.styles.scss';

function SignIn() {
  const initials = {
    email: '',
    password: '',
  };
  const [inputValue, setInputValues] = useState(initials);
  const [errors, setErrors] = useState<any>([]);
  useEffect(() => {
    axios.get('authentication/token/new?api_key=a495d3cd0cf478c71fd3590344b481b9').then((res) => {
      if (res.data.success) {
        console.log(res.data);
        localStorage.setItem('token', res.data.request_token);
      }
    });
  }, []);
  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValue, [name]: value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { email, password } = inputValue;
    if (!email && !password) return setErrors(['email and Password must not be empty']);
    if (email.length < 5) return setErrors(['email must be valid']);

    // const errors = {errorMail: ''};

    // if (!isEmail(email)) {
    // errors.errorMail = "Wrong email";
    // }

    // setErrors({errors});
    const getToken = JSON.stringify(localStorage.getItem('token'));
    const newToken = getToken.toString().slice(1, 41);
    axios.post('', getToken);
    return true;
  };
  const { email, password } = inputValue;
  return (
    <div className="login">
      <div className="login__header">
        <div className="login__nav">
          <div>
            <svg
              viewBox="0 0 111 30"
              data-uia="netflix-logo"
              className="svg-icon svg-icon-netflix-logo login__nav--logo"
              aria-hidden="true"
              focusable="false"
            >
              <g id="netflix-logo"><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14" /></g>
            </svg>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center mx-auto align-items-center">
          <div className="col-md-4 login__col">
            <form className="login__form">
              <h1>Sign In</h1>
              <div className="login__form--element">
                <input type="text" name="email" value={email} placeholder="Email Adress" className={errors ? 'border-danger' : 'border-success'} onChange={handleInput} />
                {/* <div>{errors && errors}</div> */}
                {/* <div>{errors && errors}</div> */}
              </div>
              <div className="login__form--element">
                <input type="text" name="password" className="" value={password} placeholder="Email Adress" onChange={handleInput} />
                {/* <label htmlFor="email" className="login__form--label">Password</label> */}
              </div>
              <button className="login__form--btn" type="button" onClick={handleSubmit}>Sign In</button>
              <div className="row">
                <div className="col-6">
                  <input type="checkbox" name="" id="" />
                  <span className="m-1 login__bottom--span">Remember me</span>
                </div>
                <div className="col-6">
                  <span className="float-end login__bottom--span">Need help?</span>
                </div>
              </div>
            </form>
            <div className="login__bottom pt-4">
              <div className="mb-2">
                <span className="login__bottom--span">New to Netflix?</span>
                {' '}
                <b className="login__bottom--bold">Sign up now.</b>
              </div>
              <p className="login__bottom--text">
                This page is protected by Google reCAPTCHA to ensure
                {' '}
                youre
                {' '}
                not a bot.
                <a href="/">Learn more.</a>
              </p>
            </div>

          </div>
        </div>
      </div>
      <div className="login__footer">
        <div className="container-fluid">
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
  );
}
export default SignIn;
