import { React } from "react";
import { NavbarLink } from "../NavbarLink/NavbarLink";
import './AuthLink.css';

export const AuthLink = ({ isMobileMenuOpen }) => {
    return (
        <div className={isMobileMenuOpen ? "side-button" : "navbar-nav "}>
            <NavbarLink name="Login" />
            <NavbarLink liClassName="register-button-container" navLinkClassName="register-button" name="Register" />
        </div>
    );
}
