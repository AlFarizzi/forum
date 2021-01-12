import React,{useState} from 'react';
import './App.css';
import Router from './util/Router';
import Navbar from './page/content/partials/Navbar';
import { useRecoilState } from 'recoil';
import { user } from './util/atom';
import Reload from './util/Reload';
const MemoizedNavbar = React.memo(Navbar);
function App() {
  const path = window.location.pathname;
  const [userData] = useRecoilState(user);
  Reload();
  const [show, setShow] = useState(false);
  const clickHandler = () => {
    show ? setShow(false) : setShow(true);
  }
  return (
    <div className="App">
      {/* {show ? <AddQuestion show={clickHandler} /> : ''} */}
        {userData.token && path !== "/" ? <MemoizedNavbar show={clickHandler}/> : ''}  
        <Router/>
    </div>
  );
}

export default App;
