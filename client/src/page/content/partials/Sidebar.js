import React from 'react';
import "../styles/sidebar.css"
function Sidebar(props) {
    return (
        <div className="sidebar__container">
           <div className="rooms">
               <img className="room__images" src="https://qph.fs.quoracdn.net/main-thumb-ti-1752938-100-vzudaxufgaeksaczzefzambegieyqmqw.jpeg" alt=""/>
                <small className="room__name">Mata Ketiga</small>
           </div>
           <div className="rooms">
               <img className="room__images" src="https://qph.fs.quoracdn.net/main-thumb-ti-1752938-100-vzudaxufgaeksaczzefzambegieyqmqw.jpeg" alt=""/>
                <small className="room__name">Mata Ketiga</small>
           </div>
           <div className="rooms">
               <img className="room__images" src="https://qph.fs.quoracdn.net/main-thumb-ti-1752938-100-vzudaxufgaeksaczzefzambegieyqmqw.jpeg" alt=""/>
                <small className="room__name">Mata Ketiga</small>
           </div>
        </div>
    );
}

export default Sidebar;