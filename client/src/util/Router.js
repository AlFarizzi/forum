import {Switch,Route} from 'react-router-dom';
import Base from '../page/auth/Base';
import Home from '../page/content/Base';
import Following from '../page/content/partials/Following';
import PrivateRoute from './PrivateRoute';
import { useRecoilState } from 'recoil';
import {user} from './atom';
function Router(props) {
    const [userData] = useRecoilState(user);
    return (
        <div>
            <Switch>
                {
                    !userData.token
                    ? (
                        <>
                            <Route exact path="/">
                                <Base/>
                            </Route>
                        </>
                    ) : ''
                }
                <PrivateRoute
                    path="/home"
                    component={Home}
                />
                <PrivateRoute
                    path="/following"
                    component={Following}
                />
            </Switch>
        </div>
    );
}

export default Router;