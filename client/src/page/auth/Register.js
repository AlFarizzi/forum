import React from 'react';
import "./styles/register.css";
function Register(props) {
    return (
        <div className="register__container">
              <div className="top__logo">
               <img className="login__logo" src="https://qsf.fs.quoracdn.net/-4-images.logo.wordmark_default.svg-26-74aca0454e71aad9.svg" alt=""/>
                <small className="login__slogan">Tempat berbagi pengetahuan dan memahami dunia lebih baik</small>
            </div>
        <div className="form">
            <form action="">
                <div className="register__form">
                    <input type="text" name="" className="register__input" placeholder="Nama"/>
                    <input type="text" name="" className="register__input" placeholder="Username"/>
                </div>
                <div className="form__group">
                    <input type="email" name="" className="register__input" placeholder="Email"/>
                </div>
                <div className="form__group">
                    <input type="password" name="" className="register__input" placeholder="Sandi"/>
                </div>
                <button className="register__button">Register</button>
            </form>
        </div>
    </div>
    );
}

export default Register;