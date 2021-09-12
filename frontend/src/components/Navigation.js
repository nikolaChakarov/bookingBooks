import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Navigation = () => {

    const { username } = useContext(GlobalContext);

    return (
        <>
            <ul className="navigation-main">
                {username ? <LoggedIn username={username} /> : <NotLoggedIn />}
            </ul>
        </>
    )
};

const LoggedIn = ({ username }) => {

    return (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Books">Books</Link></li>
            <li><Link to="/Logout">Logout</Link></li>
            <li>Welcome {username}</li>
        </>
    )
}

const NotLoggedIn = () => {
    return (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Register">Register</Link></li>
        </>
    )
}

export default Navigation;