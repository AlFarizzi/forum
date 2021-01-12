import React,{ useState }from 'react';
import '../styles/question.css'
import {  AiOutlineClose } from 'react-icons/ai';
import {useRecoilState} from 'recoil';
import {user} from '../../../util/atom'
import {ADD_ARTICLE, GET_ARTICLES} from '../../../util/query';
import {useMutation} from 'react-apollo';
function AddQuestion(props) {
    const [userData] = useRecoilState(user);
    const [question, setQuestion] = useState("");
    const [addArticle] = useMutation(ADD_ARTICLE);
    const clickHandler = async(e) => {
        e.preventDefault();
            let result = addArticle({variables: {
                authorId: userData.id,
                title: "This Is Article",
                article: question
            },refetchQueries: [{query:GET_ARTICLES}]})
            console.log(result);
        }
    return (
        <div className="form__container">
            <div className="box__question">
                <AiOutlineClose size={20} className="close__button" onClick={props.show}/>
                <div className="warning">
                    <h3 className="warning__header">Kiat untuk mendapatkan jawaban yang baik dan cepat</h3>
                    <ul>
                        <li className="warning__item">Pastikan pertanyaan anda belum pernah diajukan sebelumnya</li>
                        <li className="warning__item">Pastikan pertanyaan anda singkat, padat, dan lugas</li>
                        <li className="warning__item">periksa kembali tata bahasa dan ejaan yang ada</li>
                    </ul>
                </div>
                <span className="profile__asking">
                    <img className="profile__images" src={`https://ui-avatars.com/api/?name=${userData.username}&background=random`} alt=""/>
                    <small className="profile__name">{userData.username} bertanya</small>        
                </span>
                    <textarea onChange={(e) => setQuestion(e.target.value)}  className="question__input" placeholder="Awali Pertanyaan Dengan 'Apa', 'Bagaimana', 'Kenapa'">
                    </textarea>
                    <button onClick={(e) => {
                        clickHandler(e) 
                        props.show()
                    }} className="post__button">Post</button>
            </div>
        </div>
    );
}

export default AddQuestion;