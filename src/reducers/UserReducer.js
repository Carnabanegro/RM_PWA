const UserReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN": {
            return {
                username: action.result.username, password: action.result.password
            };
        }
        case "LOGOUT": {
            return {
                username: '', password: ''
            };
        }
        default:
            return state;
    }
};

export default UserReducer;