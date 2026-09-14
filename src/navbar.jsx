import './Navbar.css';
import logo from './imges/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import { FaAngleDown } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Navbar = ({ cartCount = 0 }) => {
    return (
        <BootstrapNavbar expand="lg" className="site-navbar">
            <Container className="site-navbar__container">
                <img src={logo} alt="Green Bowl logo" className="site-navbar__logo" />
                <BootstrapNavbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="site-navbar__toggle"
                />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="site-navbar__nav ms-auto">
                        <Nav.Link as={Link} to="/#home" className="site-navbar__home-link">Home</Nav.Link>

                        <div className="site-navbar__menu-item">
                            <Link to="/#about" className="site-navbar__trigger">
                                <span>About</span>
                                <FaAngleDown />
                            </Link>
                            <div className="site-navbar__submenu">
                                <Link to="/#about">Our Story</Link>
                                <Link to="/#about">Our Team</Link>
                                <Link to="/#reviews">Reviews</Link>
                            </div>
                        </div>

                        <div className="site-navbar__menu-item">
                            <Link to="/#menu" className="site-navbar__trigger">
                                <span>Menu</span>
                                <FaAngleDown />
                            </Link>
                            <div className="site-navbar__submenu">
                                <Link to="/#menu" className="site-navbar__all-menu-link">All Menu</Link>
                                <Link to="/#menu">Salads</Link>
                                <Link to="/#menu">Healthy Bowls</Link>
                                <Link to="/#menu">Smoothies</Link>
                                <Link to="/#menu">Fresh Juices</Link>
                                <Link to="/#menu">Healthy Meals</Link>
                            </div>
                        </div>

                        <Nav.Link as={Link} to="/#gallery">Gallery</Nav.Link>
                        <Nav.Link as={Link} to="/#contact">Contact</Nav.Link>

                        <div className="site-navbar__actions">
                            <Link to="/signup" className="site-navbar__btn site-navbar__btn--ghost signup-link">
                                SIGN UP
                            </Link>
                            <Link to="/book-table" className="site-navbar__btn site-navbar__btn--primary book-table-link">
                                Book a Table
                            </Link>
                            <Link to="/cart" className="site-navbar__cart" aria-label="Shopping cart">
                                <FaCartPlus />
                                {cartCount > 0 && (
                                    <span className="site-navbar__cart-count">{cartCount}</span>
                                )}
                            </Link>
                        </div>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar
