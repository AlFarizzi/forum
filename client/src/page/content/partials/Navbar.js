import React,{useState,useEffect} from 'react';
import "../styles/navbar.css";
import {AiFillHome,AiOutlineUnorderedList,AiOutlineUsergroupDelete} from 'react-icons/ai'
import {FaBars} from 'react-icons/fa';
import {NavLink, useHistory} from 'react-router-dom';
function Navbar(props) {
    const history = useHistory();
    const [key, setKey] = useState();
    const clickHandler = () => {
        document.getElementById("navbar").classList.toggle("show")
    }
    
    useEffect(() => {
        if(key) {
            history.push(`/search/${key}`)
        }
    }, [key,history]);

    return (
        <div className="navbar__container">
            <img src="https://www.vectorlogo.zone/logos/quora/quora-ar21.svg" alt=""/>
            <FaBars className="toggle" onClick={clickHandler} />
            <ul className="nav__list" id="navbar" >
               <NavLink to="/home"><li className="nav__item"><AiFillHome size={20} /> Beranda</li></NavLink>
               <NavLink to="/following"><li className="nav__item"><AiOutlineUnorderedList size={20} /> Mengikuti</li></NavLink>
               {/* <NavLink to="/answer"><li className="nav__item"><BsPen size={20} /> Jawab</li></NavLink> */}
                <NavLink to="/rooms"><li className="nav__item"><AiOutlineUsergroupDelete size={20}/> Ruang</li></NavLink>
                {/* <NavLink to="/notifications"><li className="nav__item"><AiOutlineBell size={20} /> Notifikasi</li></NavLink> */}
                <li className="second__searchbar">
                    <input type="text" onChange={(e) => setKey(e.target.value)} className="search__bar" placeholder="Cari"/>
                </li>
            </ul>
            <input onChange={(e) => setKey(e.target.value)} type="text" className="first__searchbar search__bar" placeholder="Cari"/>
            <button className="add__question" onClick={props.show}>Tambah Pertanyaan</button>
            <button className="add__question" onClick={props.room}>Buat Ruang Kamu</button>
        </div>
    );
}

export default Navbar;