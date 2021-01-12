import React, {useState} from 'react';
import "./styles/login.css";
// import {DataContainer} from '../../util/DataLayout';
import {login} from './controller/AuthController';
import { useHistory } from 'react-router-dom';
import {user} from '../../util/atom';
import { useRecoilState } from 'recoil';
function Login(props) {
    const [username,setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userData,setUserData] = useRecoilState(user);
    const history = useHistory();
   const submitHandler = async (e) => {
       e.preventDefault()
       try {
            let res = await login(username,password);
            if(res.data.token) {
                setUserData({
                    ...userData, id: res.data.data.id, name: res.data.data.name,
                    username: res.data.data.username, token: res.data.token,
                    refreshToken: res.data.rToken
                })
                // console.log(res.data);
                history.push("/home");
            } else {
                alert(res.data.message)
            }
        } catch (error) {
            throw error
        }
    }
    return (
        <div className="login__container">
            <div className="top__logo">
               <img className="login__logo" src="https://qsf.fs.quoracdn.net/-4-images.logo.wordmark_default.svg-26-74aca0454e71aad9.svg" alt=""/>
                <small className="login__slogan">Tempat berbagi pengetahuan dan memahami dunia lebih baik</small>
            </div>
            <div className="bottom__form">
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <input type="text" onChange={(e) => {setUsername(e.target.value)}} className="login__input" placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <input type="password" onChange={(e) => {setPassword(e.target.value)}} className="login__input" placeholder="Password"/>
                    </div>
                    <button type="submit" className="login__button">Sign-in</button>
                    <button type="submit" className="login__button" onClick={props.change}>Register</button>
                </form>
            </div>
        </div>
    );
}

export default Login;