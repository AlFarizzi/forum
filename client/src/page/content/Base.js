import React from 'react';
import './styles/base.css';
import Sidebar from './partials/Sidebar';
import Card from './partials/Card';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
function Base(props) {
    const GET_ARTICLES = gql `
    {
        articles {
            id
            article
            author {
                name
                username
            }
        }
    }
    `
    return (
        <div className="home__container">
            <Sidebar/>
            <div className="threads">
                <Query query={GET_ARTICLES}>
                    {
                        ({loading, data}) => !loading && (data.articles.map((article, key) => {
                            return (
                                <Card
                                    key={key}
                                    img="https://qph.fs.quoracdn.net/main-thumb-1400868774-200-weiqnlfvbutadfotdzhgtddppohfzcjj.jpeg"
                                    name={article.author?.name}
                                    username={article.author?.username}
                                    thread={article.article}
                                    />
                            )
                        }))
                    }

                </Query>

            </div>

        </div>
    );
}

export default Base;