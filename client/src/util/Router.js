import {Switch,Route} from 'react-router-dom';
import Base from '../page/auth/Base';
import Home from '../page/content/Base';
import PrivateRoute from './PrivateRoute';
import './router.css';
function Router(props) {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Base/>
                </Route>
                <PrivateRoute Path="/home" Component={Home}/>
            </Switch>
        </div>
    );
}

export default Router;