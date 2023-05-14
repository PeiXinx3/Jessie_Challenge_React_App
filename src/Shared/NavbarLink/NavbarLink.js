import { React } from "react";
import { NavLink } from "react-router-dom";
import './NavbarLink.css';

export const NavbarLink = ({ liClassName, navLinkClassName, name, key, img }) => {
    return (
        <>
            <li className={"nav-item " + liClassName} key={key}>
                <NavLink to="#" className={"nav-link " + navLinkClassName}>{img ? img : null}{name}</NavLink>
            </li>
        </>
    );
}
