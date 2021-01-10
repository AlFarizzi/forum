import {atom} from 'recoil'

export const user = atom({
    key: "authenticated",
    default :{
        id: "",
        token: "",
        username: "",
        name: "",
    }
})
