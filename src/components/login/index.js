import "./style.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import Navbar from "react-bootstrap/Navbar";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import api from "../../axios/apiConfig";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/slices/tokenSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/api/auth/login", formData);

      //console.log(api);

      //console.log(response);

      const token = response.data.token;

      dispatch(setToken(token));

      //localStorage.setItem("token", token);

      toast.success("Login success! Redirecting...");

      setTimeout(() => {

        setFormData({
          email: "",
          password: "",
        });

        navigate("/");
      }, 3000);

    } catch (error) {
      console.log("Login-handleSubmit: ", error);

      toast.error("Login failed! Please try again...");

    }
  };

  return (
    <div className="parent-login-div">
      <MDBContainer className="my-5">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src="https://galalitescreens.com/wp-content/uploads/2017/11/cinema-theatre.webp"
                alt="login form"
                className="rounded-start w-100 img-login"
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div
                  className="d-flex flex-row mt-2"
                  style={{ justifyContent: "center" }}
                >
                  <Navbar.Brand style={{ color: "gold" }}>
                    <FontAwesomeIcon
                      icon={faVideoSlash}
                      style={{ height: "50px", width: "50px" }}
                    />
                    <span
                      className="h1 fw-bold mb-0"
                      style={{ marginLeft: "10px" }}
                    >
                      Gold
                    </span>
                  </Navbar.Brand>
                </div>

                <h5
                  className="fw-normal my-4 pb-3"
                  style={{ letterSpacing: "1px", textAlign: "center" }}
                >
                  Sign into your account
                </h5>

                <form onSubmit={handleSubmit}>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email address"
                    id="formControlLg1"
                    type="email"
                    size="lg"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="formControlLg2"
                    type="password"
                    size="lg"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />

                  <MDBBtn
                    className="mb-4 px-5"
                    color="dark"
                    size="lg"
                    type="submit"
                    block
                  >
                    Login
                  </MDBBtn>
                </form>
                <div className="bottom-text-login">
                  <a className="small text-muted" href="*">
                    Forgot password?
                  </a>
                  <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                    Don't have an account?{" "}
                    <a href="/register" style={{ color: "#393f81" }}>
                      Register here
                    </a>
                  </p>

                  <div
                    className="d-flex flex-row justify-content-center"
                    style={{ gap: "40px" }}
                  >
                    <a href="*" className="small text-muted me-1">
                      Terms of use
                    </a>
                    <a href="*" className="small text-muted">
                      Privacy policy
                    </a>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

export default Login;
