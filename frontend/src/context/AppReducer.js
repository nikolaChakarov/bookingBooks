const AppReducer = (state, action) => {

    switch (action.type) {
        case 'REGISTER':
            return {
                ...state,
                username: action.payload,
            };
        case 'LOGIN':
            return {
                ...state,
                username: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                username: null
            };
        case 'ERROR':
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }

};

export default AppReducer;