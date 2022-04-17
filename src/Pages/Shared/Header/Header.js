import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/images/logo.png";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <>
      <Navbar className="bg-dark" collapseOnSelect expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="" height={40}/>
          </Navbar.Brand>
          <Navbar.Toggle className="bg-light" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="bg-white m-2" href="home#services">SERVICES</Nav.Link>
              <Nav.Link className="bg-white m-2" href="home#experts">TEACHERS</Nav.Link>
              <Nav.Link className="bg-white m-2" as={Link} to="/blogs">BLOGS</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="bg-white m-2" as={Link} to="/about">ABOUT</Nav.Link>
              {
                user ?
                <button className="btn btn-link text-white text-decoration-none" onClick={handleSignOut}>Sign Out</button>
                :
                <Nav.Link className="bg-white m-2" as={Link} to="login">
                LOGIN
              </Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
