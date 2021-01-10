import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { user } from './atom';

function PrivateRoute({Path, Component}) {
    const [userData] = useRecoilState(user);
    return (
        <Route path={Path}>
            {
                userData.token ? <Component/> : <Redirect to="/" />
            }
        </Route>
    );
}

export default PrivateRoute;