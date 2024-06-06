import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import api, { setAuthHeader } from "../../axios/apiConfig";
import { setUserDetails } from "../../store/slices/userSlice";
import { setToken } from "../../store/slices/tokenSlice";
import { toast } from "react-toastify";

const CustomNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.token.value);

  const userDetails = useSelector((state) => state.userDetails.details);

  //console.log(userDetails);

  useEffect(() => {
    async function fetchUserData() {
      if (token.length > 0) {
        setAuthHeader(token, api);

        const response = await api.get("/api/user/profile");

        //console.log(response);

        dispatch(setUserDetails(response.data));
      }
    }

    fetchUserData();
  }, [token, dispatch]);

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  const handleLogout = () => {
    toast.info("Logging out...");

    setTimeout(() => {
        dispatch(setUserDetails(null));

        dispatch(setToken(''));

        navigate("/");
    }, 3000);

  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "gold" }}>
          <FontAwesomeIcon icon={faVideoSlash} /> Gold
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/watchlist">
              Watch List
            </NavLink>
          </Nav>
          {userDetails ? (
            <div>
              <span>Welcome {userDetails.userName}</span>
              <Button variant="outline-danger" onClick={handleLogout} style={{marginLeft: "10px"}}>
                Logout
              </Button>
            </div>
          ) : (
            <div>
              <Button
                variant="outline-info"
                className="me-2"
                onClick={handleLoginRedirect}
              >
                Login
              </Button>
              <Button variant="outline-info" onClick={handleRegisterRedirect}>
                Register
              </Button>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
