import React from 'react';
import "../styles/navbar.css";
import {AiFillHome,AiOutlineUnorderedList,AiOutlineUsergroupDelete,AiOutlineBell} from 'react-icons/ai'
import {BsPen} from 'react-icons/bs';
import {FiGlobe} from 'react-icons/fi';
import {NavLink} from 'react-router-dom';
function Navbar(props) {
    return (
        <div className="navbar__container">
            <img src="https://www.vectorlogo.zone/logos/quora/quora-ar21.svg" alt=""/>
            <ul className="nav__list">
               <NavLink to="/home"><li className="nav__item"><AiFillHome size={20} /> Beranda</li></NavLink>
               <NavLink to="/following"><li className="nav__item"><AiOutlineUnorderedList size={20} /> Mengikuti</li></NavLink>
               <NavLink to="/answer"><li className="nav__item"><BsPen size={20} /> Jawab</li></NavLink>
                <NavLink to="/spaces"><li className="nav__item"><AiOutlineUsergroupDelete size={20} /> Ruang</li></NavLink>
                <NavLink to="/notifications"><li className="nav__item"><AiOutlineBell size={20} /> Notifikasi</li></NavLink>
            </ul>
            <input type="text" className="search__bar" placeholder="Cari"/>
            <FiGlobe fontSize={30}/>
            <button className="add__question">Tambah Pertanyaan</button>
        </div>
    );
}

export default Navbar;