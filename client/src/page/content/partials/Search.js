import React, { useEffect, useState, useCallback,Suspense } from 'react';
import Card from './Card';
import shortid from 'shortid';
import {useParams} from 'react-router-dom';
import axios from '../../../util/axios';
import debounce from 'lodash.debounce';
import '../styles/base.css'
function Search(props) {
    let {key} = useParams();
    const [articles, setArticles] = useState([]);
    const getArticles = useCallback(
        debounce( () => {
                axios.get(`search/${key}`)
                .then(res => {
                    setArticles(res.data);
                })
        },500)
    ) 
    useEffect(() => {
        getArticles()
    }, [key,getArticles]);
    return (
        <div className="home__container">
            <div className="threads">
                    {
                        articles.map(article => {
                            return(
                                    <Suspense key={shortid.generate()} fallback={<h1>Loading...</h1>}>
                                        <Card
                                            img={`https://ui-avatars.com/api/?name=${article.author?.name}&backgroud=random`}
                                            key={shortid.generate()}
                                            name={article.author?.name}
                                            username={article.author?.username}
                                            thread={article.article}
                                        />
                                    </Suspense>
                            )
                        })
                    }
            </div>
        </div>
    );
}

export default Search;