import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import handleLocalStorage from '../utils/handleLocalStorage';

const initialState = {
    username: localStorage.getItem('username'),
    error: localStorage.getItem('error')
};

export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    const loginUser = async (userInfo) => {

        try {
            const dbLoginResponse = await (await fetch('http://localhost:5000/users/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })).json();

            if (dbLoginResponse.msg || dbLoginResponse.errors) {
                throw new Error(dbLoginResponse.msg)
            }

            handleLocalStorage(dbLoginResponse);

            dispatch({
                type: 'LOGIN',
                payload: dbLoginResponse.username
            });

        } catch (err) {
            console.log(err);
            dispatch({
                type: 'ERROR',
                payload: err.message
            });
        }

    };


    return (
        <GlobalContext.Provider value={{
            username: state.username,
            dispatch,
            loginUser
        }}>
            {children}
        </GlobalContext.Provider>
    )

};
