import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserAuthData } from '../../interfaces/user';

interface AuthState {
    isAuthenticated: boolean;
    user: UserAuthData | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserAuthData>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            localStorage.clear();
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
