import React, {useEffect, useState, Suspense} from 'react';
import {useParams} from 'react-router-dom'
import axios from '../../../util/axios';
import '../styles/room.css'
import shortid from 'shortid';
import Card from './Card'
function Room(props) {
    const {id,roomName} = useParams();
    const [details, setDetails] = useState([]);
    const [bgImg, setbgImg] = useState('');
    useEffect(() => {
        const getDetails = async() => {
            try {
                setDetails(await axios.get(`rooms/${id}`))
            } catch (error) {
                throw error
            }
        }
        getDetails()
        setbgImg('https://source.unsplash.com/random');
    }, []);
    console.log(details);
    return (
        <div className="room__container">
            <div style={{backgroundImage:`url("${bgImg}")`}} className="room__detail__banner">
                <img  className="room__profile__image__detail" src="https://source.unsplash.com/user/korpa" alt="profile"/>
            </div>
            <div className="threads">
                {
                   details.data?.articles.length > 0 
                   ? details.data?.articles.map(article => {
                        return(
                            <Suspense key={shortid.generate()} fallback={<h1>Loading...</h1>}>
                            <Card
                                    img={`https://ui-avatars.com/api/?name=${article.author?.name}&backgroud=random`}
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