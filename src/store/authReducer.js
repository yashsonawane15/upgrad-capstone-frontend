import { createSlice } from '@redux/toolkit';


const initialState = {
    'token': '',
    'loggedIn': false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload;
            state.loggedIn = true;
        },
        logout: (state, action) => {
            state.token = "";
            state.loggedIn = false;
        }
    }    
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

