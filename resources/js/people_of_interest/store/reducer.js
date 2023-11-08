export default function reducer(state, action) {
    switch (action.type) {
        case "user/set":
            return {
                ...state,
                user: action.payload,
            };
        case "user/register":
            return {
                ...state,
                isRegistered: action.payload,
            };
        case "user/login":
            return {
                ...state,
                isLoggedIn: action.payload,
            };
        case "user/logout":
            return {
                ...state,
                isLoggedOut: action.payload,
            };
        default:
            return state;
    }
}
