import React, { Suspense, useEffect, useState } from 'react';
import shortid from 'shortid';
import { withRouter } from 'react-router-dom';
import Sidebar from './partials/Sidebar';
import axios from '../../util/axios';
import './styles/base.css';
const Card = React.lazy(() => import("./partials/Card"));
const MemoizedSidebar = React.memo(Sidebar);

function Base(props) {
    const [articles,setArticles] = useState([]);
    useEffect(() => {
        const getArticles = async() =>  {
            try {
                setArticles(await axios.get("/articles"))
            } catch (error) {
                throw error
            }
        }
        getArticles()
    }, []);
    console.log(articles);
    return (
        <div className="home__container">
            <MemoizedSidebar />
            <div className="threads">
                <Suspense fallback={"Loading...."}>
                    {
                        articles.data?.map(article => {
                            return(
                                <Card
                                    img={`https://ui-avatars.com/api/?name=${article.author?.name}&backgroud=random`}
                                    key={shortid.generate()}
                                    name={article.author?.name}
                                    username={article.author?.username}
                                    thread={article.article}
                                />
                            )
                        })
                    }
                </Suspense>
            </div>
        </div>
    );
}

export default withRouter(Base) ;