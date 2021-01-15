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
    return (
        <div className="home__container">
            <MemoizedSidebar />
            <div className="threads">
                    {
                        articles.data?.map(article => {
                            return(
                                <Suspense key={shortid.generate()} fallback={<h1>Loading.....</h1>}>
                                    <Card
                                        img={`https://avatars.dicebear.com/api/avataaars/${shortid.generate()}.svg`}
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

export default withRouter(Base) ;