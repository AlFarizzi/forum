import React from 'react';
import { Route} from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { user } from './atom';
function PrivateRoute({path:path,component:Component, ...rest}) {
    const [userData] = useRecoilState(user);
    return (
        <Route
            {...rest}
            render={(props) => {
                if(userData.token) {
                    return <Component/>
                }
            }}
        />
    );
}

export default PrivateRoute;