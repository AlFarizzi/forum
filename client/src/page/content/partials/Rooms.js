import React,{useEffect,useState, Suspense} from 'react';
import {useRecoilState} from 'recoil';
import {user} from '../../../util/atom';
import axios from '../../../util/axios'
import shortId from 'shortid'
import '../styles/rooms.css'
function Rooms(props) {
    const path = window.location.pathname;
    const [rooms,setRooms] = useState([]);
    const [userData] = useRecoilState(user)
    const limit = (str) => {
        if(str !== undefined) {
            let result = str.split("");
            return result.slice(0,result.length > 50 ? 50 : result.length).join("");
        }
    }
    useEffect(() => {
        const getRooms = async () => {
            try {
                let res;
                if(path === "/rooms") {
                    res = await axios.get('rooms');
                } else {
                    res = await axios.get('rooms', {
                        headers:{
                            "identifier": userData.id
                        }
                    })
                }
                setRooms(res.data);
            } catch (error) {
                throw error
            }
        }       
        getRooms()
    }, [path,userData.id]);
    return (
        <div className="rooms__container">
            <h5 className="room__slogan">Temukan Ruang</h5>
            <div className="room__list">
                {
                    rooms.map(room => {
                        return(
                            <Suspense fallback={<h1>Loading ....</h1>} key={shortId.generate()}>
                                <a className="room__link" 
                                href={`/room/${path === "/rooms" ? room.id : room?.rooms?.id}/${room.roomName || room.rooms?.roomName}`}>
                                    <div className="room">
                                        <div className="room__banner">
                                            <div>
                                                <img className="profile__image" 
                                                src="https://source.unsplash.com/user/imjma/likes" 
                                                alt=""/>
                                            </div>
                                        </div>
                                        <div className="room__title">
                                                {
                                                    room.roomName ||
                                                    room?.rooms?.roomName
                                                }
                                        </div>
                                        <div className="room__explained">
                                             {limit(
                                                room.roomDescription || 
                                                room.rooms?.roomDescription)
                                            }
                                        </div>
                                    </div>
                                </a>
                            </Suspense>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Rooms;