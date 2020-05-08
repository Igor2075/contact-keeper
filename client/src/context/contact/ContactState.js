import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
	const initialState = {
		contacts: [
			{
				type: "personal",
				id: "5eb44d3df42cef3e30a7b993",
				name: "Harry Snotter",
				email: "HSnotter@jex.nl",
				phone: "123-555-7411",
			},
			{
				type: "professional",
				id: "5eb44cc4f42cef3e30a7b992",
				name: "Ted Neumannt",
				email: "T_Meu@jex.nl",
				phone: "123-555-3245",
			},
			{
				type: "personal",
				id: "5eb43ac5f42cef3e30a7b991",
				name: "Jane Doe",
				email: "jane_doe@jex.nl",
				phone: "123-555-7895",
			},
		],
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
			}}>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
