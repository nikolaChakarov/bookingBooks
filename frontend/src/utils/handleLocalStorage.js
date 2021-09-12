const handleLocalStorage = (data) => {

    localStorage.setItem('id', data.id);
    localStorage.setItem('username', data.username);
    localStorage.setItem('token', data.token);

};

export default handleLocalStorage;