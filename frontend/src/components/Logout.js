import { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Logout = ({ history }) => {

    const { dispatch } = useContext(GlobalContext);

    useEffect(() => {
        localStorage.clear();

        dispatch({
            type: 'LOGOUT'
        });

        history.push('/');

    }, [history, dispatch]);

    return null;

};

export default Logout;