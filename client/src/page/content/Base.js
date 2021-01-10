import React from 'react';
import './styles/base.css';
import Sidebar from './partials/Sidebar';
import Card from './partials/Card';
import {Query} from 'react-apollo';
import {GET_ARTICLES} from '../../util/query'
function Base(props) {
    return (
        <div className="home__container">
            <Sidebar/>
            <div className="threads">
               <Query query={GET_ARTICLES}>
                {
                    ({loading,error,data}) => loading ? <small>Loading .... </small>
                    : data.articles?.map((article,key) => {
                        return (
                            <Card
                            key={key}
                            img={`https://ui-avatars.com/api/?name=${article.author?.name}&background=random`}
                            name={article.author?.name}
                            username={article.author?.username}
                            thread={article?.article}
                            />
                        )
                    })
                }
               </Query>
            </div>

        </div>
    );
}

export default Base;