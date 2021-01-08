import React from 'react';
import "../styles/card.css";
function Card({img,name,username,thread}) {
    return (
        <div className="card__container">
            <div className="header">
                <img className="img__profile" src={img} alt=""/>
                <div className="user__profile">
                    <small className="user__name">{name}</small>
                    <small className="user__username">{username}</small>
                </div>
            </div>
            <div className="content__">
               {thread}
            </div>
        </div>
    );
}

export default Card;