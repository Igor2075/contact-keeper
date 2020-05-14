import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

function Navbar({ title, icon }) {
	const authContext = useContext(AuthContext);
	const contactContext = useContext(ContactContext);
	const { logout, user, isAuthenticated } = authContext;
	const { clearContacts } = contactContext;

	const onLogout = () => {
		logout();
		clearContacts();
	};

	const authLinks = (
		<Fragment>
			<li>Hello {user && user.name} </li>
			<li>
				<a href="#!" onClick={onLogout}>
					<i className="fas fa-sign-out-alt"></i>{" "}
					<span className="hide-sm">Logout</span>
				</a>
			</li>
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			<Link to="/login">Login</Link>
			<Link to="/register">Register</Link>
		</Fragment>
	);

	return (
		<div className="navbar bg-primary">
			<h1>
				<i className={icon} /> {title}
			</h1>
			<ul>{isAuthenticated ? authLinks : guestLinks}</ul>
		</div>
	);
}

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string,
};

Navbar.defaultProps = {
	title: "Contact Keeper",
	icon: "fas fa-id-card-alt",
};

export default Navbar;
