import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCES,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_ERROR,
} from "../types";

const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem("item"),
		isAuthenticated: null,
		loading: true,
		user: null,
		error: null,
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				user: state.user,
				error: state.error,
			}}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;