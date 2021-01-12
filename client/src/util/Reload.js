import {user} from './atom';
import {useRecoilState} from 'recoil';
import axios from './axios';
import { useHistory } from 'react-router-dom';
function Reload(props) {
    const path = window.location.pathname;
    const [userData,setUserData] = useRecoilState(user);
    const history = useHistory();
    console.log(userData);
    window.addEventListener("beforeunload", async(e) => {
        try {
          if(userData.token && path !== "/") {
            document.cookie = `refresh_token = ${userData.refreshToken}`
             await axios.post("/authenticated",{
              refresh_token: userData.refreshToken,
              userId: userData.id,
              name: userData.name,
              username: userData.username
            })
          }
        } catch (error) {
          throw error;      
        }
    })  
    window.addEventListener("DOMContentLoaded", async(e) => {
      try {
          let token = document.cookie.split("refresh_token=")[1];
          // console.log(document.cookie.split("refresh_token="))
          if(token) {
            await axios.post('/new-token', {token})
            .then(data => {
                setUserData({
                  ...userData , id: data.data.user_id, name: data.data.name,
                  username: data.data.username, token: data.data.token, 
                  refreshToken: data.data.refresh_token
                })
            })
            if(path === "/" && token) {
              history.push("/home")
            }
          } else if(!token && path !== "/") {
            history.push("/")
          }
      } catch (error) {
        throw error
      }
    })
}

export default Reload;