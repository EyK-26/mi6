export default function reducer(state, action) {
    console.log(state, action);
    switch (action.type) {
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
        case "messages/set":
            return {
                ...state,
                messages: action.payload,
            };
        default:
            return state;
    }
}
