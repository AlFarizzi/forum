import React,{useState} from 'react';
import './App.css';
import Router from './util/Router';
import Navbar from './page/content/partials/Navbar';
import { useRecoilState } from 'recoil';
import { user } from './util/atom';
import AddQuestion from './page/content/partials/AddQuestion';
import AddRoom from './page/content/partials/AddRoom';
import Reload from './util/Reload';
const MemoizedNavbar = React.memo(Navbar);
function App() {
  const path = window.location.pathname;
  const [userData] = useRecoilState(user);
  const [show, setShow] = useState(false);
  const [add,setAdd] = useState(false);
  const clickHandler = () => {
    show ? setShow(false) : setShow(true);
  }
  const roomHandler = () => {
    add ? setAdd(false) : setAdd(true);
  }
  Reload()
  return (
    <div className="App">
      {show ? <AddQuestion show={clickHandler} /> : '' }
      {add ? <AddRoom room={roomHandler} /> : '' }
        {userData.token && path !== "/" ? <MemoizedNavbar show={clickHandler} room={roomHandler}/> : ''}  
        <Router/>
    </div>
  );
}

export default App;
