import React,{ useState }from 'react';
import {  AiOutlineClose } from 'react-icons/ai';
import {useRecoilState} from 'recoil';
import {user} from '../../../util/atom'
import axios from '../../../util/axios';
import '../styles/addRoom.css';

function AddRoom(props) {
    const [roomName, setRoomName] = useState('');
    const [roomDescription, setRoomDescription] = useState('');
    const [userData] = useRecoilState(user)   
    const submitHandler = async() => {
        try {
            let res = await axios.post('/rooms', {
                roomName,
                description: roomDescription,
                ownerId: userData.id
            })
            console.log(res);
        } catch (error) {
            throw error          
        }
    }

    return (
        <div className="form__container">
            <div className="box__question2">
                <AiOutlineClose size={20} className="close__button" onClick={props.room}/>
                <div className="room__instruction">
                    <h3 className="header1">Buat ruang</h3>
                    <small className="header2">Buat Ruang untuk membagikan minat, mengurasi konten, menyelenggarakan diskusi, dan banyak lagi.</small>
                </div>
                <div className="room__detail__data">
                    <span className="data__name">Nama</span>
                    <input type="text" 
                    onChange={(e) => {setRoomName(e.target.value)}}
                    className="room__name" placeholder="Masukan Nama Untuk Ruang Anda"/>
                </div>
                <div className="room__detail__data">
                    <span className="data__name">Tentang Kami</span>
                    <input type="text" 
                    onChange={(e) => {setRoomDescription(e.target.value)}}
                    className="room__name" placeholder="Deskripsi 1 Baris Tentang Ruang Anda"/>
                </div>
                <button onClick={submitHandler} className="room__button">Buat</button>
            </div>
        </div>
    );
}

export default AddRoom;