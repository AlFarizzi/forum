import React,{useState} from 'react';
import "./styles/register.css";
import { register } from './controller/AuthController';
import {useHistory} from 'react-router-dom'
function Register(props) {
    const [name,setName] = useState("")
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [passwordConfirmation,setPasswordConfirmation] = useState("")
    const history = useHistory();
    const submitHandler = async(e) => {
        e.preventDefault();
        let res = await register(username,name,password,passwordConfirmation)
        if(res.status === 200) history.push("/")
    }

    return (
        <div className="register__container">
              <div className="top__logo">
               <img className="login__logo" src="https://qsf.fs.quoracdn.net/-4-images.logo.wordmark_default.svg-26-74aca0454e71aad9.svg" alt=""/>
                <small className="login__slogan">Tempat berbagi pengetahuan dan memahami dunia lebih baik</small>
            </div>
        <div className="form">
            <form onSubmit={submitHandler}>
                <div className="register__form">
                    <input type="text" onChange={(e) => {setName(e.target.value)}}  className="register__input" placeholder="Nama"/>
                    <input type="text" onChange={(e) => {setUsername(e.target.value)}} className="register__input" placeholder="Username"/>
                </div>
                <div className="form__group">
                    <input type="password" onChange={(e) => {setPassword(e.target.value)}} className="register__input" placeholder="Sandi"/>
                </div>
                <div className="form__group">
                    <input type="password" onChange={(e) => {setPasswordConfirmation(e.target.value)}} className="register__input" placeholder="Konfirmasi Sandi"/>
                </div>
                <button type="submit" className="register__button">Register</button>
            </form>
        </div>
    </div>
    );
}

export default Register;