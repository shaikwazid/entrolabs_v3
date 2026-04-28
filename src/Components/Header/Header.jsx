import React, { useEffect, useState } from "react";
import logo1 from "../../assets/logo-white.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Header.css";
import { techData } from "../Techonologies/techdata";
import { RiMenuFoldFill, RiCloseLine } from "react-icons/ri";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // ✅ Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // ✅ Close menu on nav click
    const handleNavClick = () => {
        setMenuOpen(false);
    };

    return (
        <div className={`header ${scrolled ? "scrolled" : ""}`}>
            <nav className="navbar navbar-expand-lg navbar-light navbar-custom py-2">
                <div className="container">

                 {/* LOGO */}
                <NavLink className="navbar-brand" to="/" onClick={handleNavClick}>
                <motion.img
                    src={logo1}
                    alt="logo"
                    style={{ width: "150px" }}
                    
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}

                    whileHover={{ scale: 1.1, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                />
                </NavLink>

                    {/* TOGGLER */}
                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <RiCloseLine size={30} /> : <RiMenuFoldFill size={28} />}
                    </button>

                    {/* NAVBAR CONTENT */}
                    <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
                        <ul className="navbar-nav ms-auto align-items-lg-center">

                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    onClick={handleNavClick}
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/about"
                                    onClick={handleNavClick}
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/services"
                                    onClick={handleNavClick}
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                >
                                    Services
                                </NavLink>
                            </li>

                            {/* TECHNOLOGIES DROPDOWN */}
                            <li className="nav-item dropdown">
                                <button
                                    className="nav-link dropdown-toggle-custom btn btn-link"
                                    data-bs-toggle="dropdown"
                                >
                                    Technologies
                                    <span className="dropdown-icon"></span>
                                </button>

                                <ul className="dropdown-menu">
                                    {techData.map((tech) => (
                                        <li key={tech.id}>
                                            <NavLink
                                                to={`/technologies/${tech.id}`}
                                                onClick={handleNavClick}
                                                className={({ isActive }) =>
                                                    `dropdown-item ${isActive ? "active" : ""}`
                                                }
                                            >
                                                {tech.title}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/projects"
                                    onClick={handleNavClick}
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                >
                                    Projects
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/careers"
                                    onClick={handleNavClick}
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                >
                                    Careers
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/contact"
                                    onClick={handleNavClick}
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Header;