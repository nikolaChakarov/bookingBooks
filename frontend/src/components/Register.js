import { useState } from 'react';

const Register = () => {

    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
        password2: ''
    });

    const onInputChanged = (e) => {
        const currentInput = e.target.name;

        setUserInfo(prev => {
            return {
                ...prev,
                [currentInput]: e.target.value
            }
        })

    };

    const onFormSubmit = (e) => {
        e.preventDefault();


    };

    return (
        <>
            <h2>Register</h2>

            <form
                className="form register-form"
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

                <div className="form-element">
                    <label htmlFor="password2">Repeat Password:</label>
                    <input
                        type="text"
                        id="password2"
                        name="password2"
                        value={userInfo.password2}
                        onChange={onInputChanged}
                    />
                </div>

                <button className="btn submit-btn">Register</button>
            </form>
        </>
    )

};

export default Register;