import React,{useEffect,useState, Suspense} from 'react';
import axios from '../../../util/axios'
import shortId from 'shortid'
import '../styles/rooms.css'
function Rooms(props) {
    const [rooms,setRooms] = useState([]);
    const limit = (str) => {
        let result = str.split("");
        return result.slice(0,result.length > 50 ? 50 : result.length).join("");
    }
    useEffect(() => {
        const getRooms = async () => {
            try {
                let res = await axios.get("/rooms");
                setRooms(res.data);
            } catch (error) {
                throw error
            }
        }       
        getRooms()
    }, []);
    return (
        <div className="rooms__container">
            <h5 className="room__slogan">Temukan Ruang</h5>
            <div className="room__list">
                {
                    rooms.map(room => {
                        return(
                            <Suspense fallback={<h1>Loading ....</h1>} key={shortId.generate()}>
                                <a className="room__link" href={`/room/${room.id}/${room.roomName}`}>
                                    <div className="room">
                                        <div className="room__banner">
                                            <div>
                                                <img className="profile__image" 
                                                src="https://source.unsplash.com/user/imjma/likes" 
                                                alt=""/>
                                            </div>
                                        </div>
                                        <div className="room__title">
                                                {room.roomName}
                                        </div>
                                        <div className="room__explained">
                                             {limit(room.roomDescription)}
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