import './App.css';
import Router from './util/Router';
import Navbar from './page/content/partials/Navbar';
const path = window.location.pathname;
function App() {
  return (
    <div className="App">
      {
        path !== "/"
        ? <Navbar/> : '' 
      } 
        <Router/>
    </div>
  );
}

export default App;
