import React, {useEffect, useState, Suspense} from 'react';
import {useRecoilState} from 'recoil'
import {user} from '../../../util/atom' 
import {useParams} from 'react-router-dom'
import axios from '../../../util/axios';
import '../styles/room.css'
import shortid from 'shortid';
import Card from './Card'
function Room(props) {
    const {id} = useParams();
    const [details, setDetails] = useState([]);
    const [bgImg, setbgImg] = useState('');
    const [following,setFollowing] = useState(false);
    const [userData] = useRecoilState(user);
    let check = details?.data?.check;

    const followHandler = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.post('room/follow', {userId:userData.id, roomId:id})
            res ? setFollowing(true) : setFollowing(false);
        }
         catch (error) {
            throw error
        }
    }

    const unfollowHandler = async(e) => {
        try {
            let res = await axios.get(`room/unfollow/${userData.id}/${id}`)
            if(res.data === 1) setFollowing(false);
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        const getDetails = async() => {
            try {
                setDetails(await axios.get(`rooms/${id}`, {
                    headers: {
                       "identifier":userData.id
                    }
                }))
            } catch (error) {
                throw error
            }
        }
        getDetails()
        setbgImg('https://source.unsplash.com/random');
        // localStorage.setItem("roomId", id)
    }, [id, userData.id]);
    console.log(check);
    return (
        <div className="room__container">
            <div style={{backgroundImage:`url("${bgImg}")`}} className="room__detail__banner">
                <img  className="room__profile__image__detail" src="https://source.unsplash.com/user/korpa" alt="profile"/>
                <button className="follow__button" onClick={check || following ? unfollowHandler : followHandler}>
                    {check || following ? "Berhenti Mengikuti" : "Ikuti"}
                </button>
            </div>
            <div className="threads">
                {
                   details.data?.articles.length > 0 
                   ? details.data?.articles.map(article => {
                        return(
                            <Suspense key={shortid.generate()} fallback={<h1>Loading...</h1>}>
                            <Card
                                    img={`https://avatars.dicebear.com/api/avataaars/${shortid.generate()}.svg`}
                                    name={article.author?.name}
                                    username={article.author?.username}
                                    thread={article.article}
                                />
                            </Suspense> 
                        )
                    })
                    : <h1>Tidak Ada Postingan Pada Ruang Ini 🤭  </h1>
                }
            </div>
        </div>
    );
}

export default Room;