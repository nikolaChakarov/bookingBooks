import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Error from '../error/Error';

const Login = () => {

    const [userInfo, setUserInfo] = useState({
        username: '',
        password: ''
    });

    const [inputError, setInputError] = useState({
        usernameMessage: '',
        passwordMessage: ''
    });

    const hideErrorBox = (inputErrorKey) => {
        setInputError(prev => {
            return {
                ...prev,
                [inputErrorKey]: ''
            }
        });
    }

    const { loginUser } = useContext(GlobalContext);

    const onInputChanged = (e) => {

        const currentInputName = e.target.name;

        setUserInfo(prev => {
            return {
                ...prev,
                [currentInputName]: e.target.value
            }
        });

    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        let err = false;

        if (userInfo.username === '') {
            setInputError(prev => {
                return {
                    ...prev,
                    usernameMessage: 'Please enter your username'
                }
            });
            err = true
        }

        if (userInfo.password === '') {
            setInputError(prev => {
                return {
                    ...prev,
                    passwordMessage: 'Please enter your password'
                }
            });
            err = true;
        }

        if (err) {
            return;
        }

        loginUser(userInfo);
    }

    return (
        <>
            <h2>Login</h2>

            <form
                className="form login-form"
                onSubmit={onFormSubmit}
            >

                <div className="form-element">
                    <label htmlFor="username">User Name:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={userInfo.username}
                        onChange={onInputChanged}
                    />
                </div>
                {inputError.usernameMessage ? <Error
                    message={inputError.usernameMessage}
                    hideErrorBox={() => hideErrorBox('usernameMessage')}
                /> : null}

                <div className="form-element">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        value={userInfo.password}
                        onChange={onInputChanged}
                    />
                </div>
                {inputError.passwordMessage ? <Error
                    message={inputError.passwordMessage}
                    hideErrorBox={() => hideErrorBox('passwordMessage')}
                /> : null}

                <button className="btn submit-btn">Login</button>
            </form>
        </>
    )

};

export default Login;