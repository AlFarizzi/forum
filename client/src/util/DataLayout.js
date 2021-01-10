import {useReducer,createContext} from 'react';

const initialState = {
    token :"",
    id: "",
    username: "",
    name: "",
}

function reducer(state,action) {
    switch (action.type) {
        case "SET_DATA":
            return {
                ...state,
                id:action.data.data.id,
                username:action.data.data.username,
                name:action.data.data.name,
                token: action.data.token
            }         
        default:
            break;
    }
}

export const DataContainer = createContext(initialState);

export const DataLayout = (props) => {
    const [state,dispatch] = useReducer(reducer,initialState)
    const setData = (data) => {
        dispatch({
            type: "SET_DATA",
            data: data
        })
    }
    const tools = {state,setData}
    return (
        <DataContainer.Provider value={tools}>
            {props.children}
        </DataContainer.Provider>
    )
}
