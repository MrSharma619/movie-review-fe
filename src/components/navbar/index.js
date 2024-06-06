import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import { NavLink, useNavigate } from "react-router-dom";

const CustomNavbar = () => {

    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        navigate("/login");
    }

    const handleRegisterRedirect = () => {
        navigate("/register");
    }

    return ( 
        <Navbar bg="dark" variant="dark" expand="lg" >
            <Container fluid>
                <Navbar.Brand href="/" style={{"color": "gold"}}>
                    <FontAwesomeIcon icon={faVideoSlash} /> Gold

                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: "100px"}}
                        navbarScroll
                    >
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/watchlist">Watch List</NavLink>

                    </Nav>

                    <Button variant="outline-info" className="me-2" onClick={handleLoginRedirect}>Login</Button>
                    <Button variant="outline-info" onClick={handleRegisterRedirect}>Register</Button>

                </Navbar.Collapse>

            </Container>

        </Navbar>
     );
}
 
export default CustomNavbar;