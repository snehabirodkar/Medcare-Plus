export let initialState = null;

export const reducer = (state, action) => {
    if(action.type === "USER") {
        return action.payload;
    }
    return state;
}

// initialState = {
//     loggedIn: localStorage.getItem('isLoggedIn') || false,
// }