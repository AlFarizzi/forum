import axios from '../../../util/axios';
import { useLayoutEffect } from 'react';

export const login = async(username,password) => {
    // e.preventDefault();
    try {
        let res = await axios.post("/login", {username,password})
       return res;
    } catch (error) {
        throw error
    }
}

export const register = async(username,name,password,passwordConfirmation) => {
    try {
        let res = await axios.post('/register', {name,username,password,passwordConfirmation})
        return res.data;
    } catch (error) {
        throw error
    }
}
