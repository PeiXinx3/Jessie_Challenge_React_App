import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthLink } from "../AuthLink/AuthLink";
import { NavbarLink } from "../NavbarLink/NavbarLink";
import './Menu.css';

export const Menu = ({ brand, links }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [expandMenu, setExpandMenu] = useState([]);

    const toggleMobileMenu = () => {
        if (isMobileMenuOpen) {
            setExpandMenu([])
            setIsMobileMenuOpen(!isMobileMenuOpen);
        } else {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            setExpandMenu(links.map((link, key) => (link.sublinks ? key : null)).filter(item => item !== null))
        }
    };

    const toggleExpandMenu = (key) => {
        if (expandMenu.includes(key)) {
            setExpandMenu((prev) => prev.filter((k) => k !== key));
        } else {
            setExpandMenu((prev) => [...prev, key]);
        }
    };

    const checkExpandMenuKey = (key, trueValue, falseValue) => {
        return expandMenu.includes(key) ? trueValue : falseValue
    }

    const checkMobileMenuIsOpen = (trueValue, falseValue) => {
        return isMobileMenuOpen ? trueValue : falseValue
    }

    return (
        <nav className="navbar">
            <NavLink to="/" className="navbar-brand"><img src={brand.img} alt={brand.alt} /></NavLink>
            <div className="toggle-button" onClick={toggleMobileMenu}>
                <img src='images/icon-menu.svg' alt="icon-menu" />
            </div>
            <div style={{ display: checkMobileMenuIsOpen("block", "none") }} className="overlay" onClick={toggleMobileMenu}></div>
            <ul className={checkMobileMenuIsOpen("navbar-nav active", "navbar-nav")} style={{ width: '100%' }} onMouseLeave={() => { setExpandMenu([]) }}>
                <div className="toggle-button close-menu" onClick={toggleMobileMenu}>
                    <img src='images/icon-close-menu.svg' alt="icon-close-menu" />
                </div>
                {links.map((link, key) => (
                    link.sublinks ?
                        <li className="nav-item has-submenu" key={key}>
                            <a href="#" className="nav-link" onMouseEnter={() => { toggleExpandMenu(key); }}>{link.name}
                                <img className="arrow"
                                    src={checkExpandMenuKey(key, "images/icon-arrow-up.svg", "images/icon-arrow-down.svg")}
                                    alt={checkExpandMenuKey(key, "Collapse submenu", "Expand submenu")}
                                /></a>
                            <ul className="submenu" style={{ display: checkExpandMenuKey(key, "block", "none") }}>
                                {link.sublinks.map((sublink, sub_key) => {
                                    return (
                                        <NavbarLink name={sublink.name} key={sub_key} img={sublink.img ? <img src={sublink.img} alt="icons" /> : null} />
                                    )
                                })}
                            </ul>
                        </li> :
                        <NavbarLink name={link.name} key={key} />
                ))}
                {isMobileMenuOpen ? <AuthLink isMobileMenuOpen={isMobileMenuOpen} /> : null}
            </ul>
            {isMobileMenuOpen ? null : <AuthLink isMobileMenuOpen={isMobileMenuOpen} />}
        </nav >
    );
}
