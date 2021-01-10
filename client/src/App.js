import './App.css';
import Router from './util/Router';
import Navbar from './page/content/partials/Navbar';
import { useRecoilState } from 'recoil';
import { user } from './util/atom';
function App() {
  const path = window.location.pathname;
  const [userData] = useRecoilState(user);
  return (
    <div className="App">
        {userData.token && path !== "/" ? <Navbar/> : ''}  
        <Router/>
    </div>
  );
}

export default App;
