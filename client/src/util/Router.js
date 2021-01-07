import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Base from '../page/auth/Base';
import Home from '../page/content/Base';
import './router.css';
function Router(props) {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Base/>
                </Route>
                <div className="content">
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/following">
                        <h1>Following</h1>
                    </Route>
                    <Route path="/answer">
                        <h1>Answer</h1>
                    </Route>
                    <Route path="/spaces">
                        <h1>Spaces</h1>
                    </Route>
                    <Route path="/notifications">
                        <h1>Notifications</h1>
                    </Route>
                </div>
            </Switch>
        </div>
    );
}

export default Router;