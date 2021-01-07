import React from 'react';
import "./styles/login.css";
function Login(props) {
    return (
        <div className="login__container">
            <div className="top__logo">
               <img className="login__logo" src="https://qsf.fs.quoracdn.net/-4-images.logo.wordmark_default.svg-26-74aca0454e71aad9.svg" alt=""/>
                <small className="login__slogan">Tempat berbagi pengetahuan dan memahami dunia lebih baik</small>
            </div>
            <div className="bottom__form">
                <form action="">
                    <div className="form-group">
                        <input type="text" name="" id="" className="login__input" placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="" id="" className="login__input" placeholder="Password"/>
                    </div>
                    <button type="submit" className="login__button">Sign-in</button>
                </form>
            </div>
        </div>
    );
}

export default Login;