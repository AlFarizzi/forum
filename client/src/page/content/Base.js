import React from 'react';
import './styles/base.css';
import Sidebar from './partials/Sidebar';
import Card from './partials/Card';
function Base(props) {
    return (
        <div className="home__container">
            <Sidebar/>
            <Card />
        </div>
    );
}

export default Base;