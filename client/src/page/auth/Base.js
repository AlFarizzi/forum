import {useState} from 'react';
import Login from './Login';
import Register from './Register';
import './styles/base.css';
function Base(props) {
    const [page, setPage] = useState("login");
    const clickHandler = (e) => {
        page === "login"
            ? setPage("register")
            : setPage("login")
    }
    return (
        <div className="base__container">
            {
                page === "login"
                    ? <Login/>
                    : <Register/>
            }
            <button
                className={page === "login"
                    ? "button__register"
                    : "button__login" }
                onClick={clickHandler}>
                    {
                        page === "login"
                        ? "Register"
                        : "Login"
                    }
                </button>
        </div>
    );
}

export default Base;