import {user} from './atom';
import {useRecoilState} from 'recoil';
import axios from './axios';
import { useHistory } from 'react-router-dom';
function Reload(props) {
    const path = window.location.pathname;
    const [userData,setUserData] = useRecoilState(user);
    const history = useHistory();
    window.addEventListener("beforeunload", async(e) => {
        try {
          if(userData.refreshToken) {
              sessionStorage.setItem("refresh_token", userData.refreshToken);
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
      if(path !== "/logout") {
          try {
              let token = sessionStorage.getItem("refresh_token")
              if(token && path !== "/") {
                await axios.post('/new-token', {token})
                .then(data => {
                    setUserData({
                      ...userData , id: data.data.user_id, name: data.data.name,
                      username: data.data.username, token: data.data.token, 
                      refreshToken: data.data.refresh_token
                    })
                })
              } else if(!token && path !== "/") {
                history.push("/")
              }
              setTimeout(() => {
                sessionStorage.removeItem("refresh_token")
              }, 1000);
          } catch (error) {
            throw error
          }
      } else {
         history.push('/')
      }
    })
}

export default Reload;