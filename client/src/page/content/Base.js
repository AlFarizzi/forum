import React from 'react';
import './styles/base.css';
import Sidebar from './partials/Sidebar';
import Card from './partials/Card';
function Base(props) {
    return (
        <div className="home__container">
            <Sidebar/>
            <div className="threads">
            <Card
                img="https://qph.fs.quoracdn.net/main-thumb-1400868774-200-weiqnlfvbutadfotdzhgtddppohfzcjj.jpeg"
                name="Nindya Yulieva"
                username="S1 dari Universitas Negeri" thread="Pernah.1,5jt. Sebenarnya isu tentang mata2 lamtur yang di bayar per foto itu udah pernah di bahas oleh beberapa akun Twitter. Jadi tahun 2019 saya dan Kakak sepupu saya nonton di XXI bintaro. Waktu itu kami berdua lagi"/>
            <Card
                img="https://qph.fs.quoracdn.net/main-thumb-1400868774-200-weiqnlfvbutadfotdzhgtddppohfzcjj.jpeg"
                name="Nindya Yulieva"
                username="S1 dari Universitas Negeri" thread="Pernah.1,5jt. Sebenarnya isu tentang mata2 lamtur yang di bayar per foto itu udah pernah di bahas oleh beberapa akun Twitter. Jadi tahun 2019 saya dan Kakak sepupu saya nonton di XXI bintaro. Waktu itu kami berdua lagi"/>

            </div>
       
            </div>
    );
}

export default Base;