import { useState } from "react";
import "./style.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import api from "../../axios/apiConfig";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    //console.log(e.target.checked);

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //console.log(formData);

    if (formData.password === formData.repeatPassword) {
      try {
        delete formData.repeatPassword;

        //console.log(formData);

        const response = await api.post("/api/auth/register", formData);

        //console.log(response);

        if (response.status === 201) {
          toast.success("Registration success. Please login now...");

          setTimeout(() => {
            setFormData({
              fullName: "",
              userName: "",
              email: "",
              password: "",
              repeatPassword: "",
            });

            navigate("/login");
          }, 3000);

        }

      } catch (error) {
        console.log("Register-handleSubmit: ", error);

        toast.error("Register failed! Please try again...");
      }
    } else {
      toast.error("Passwords dont match. Please check again");
    }
  };

  return (
    <div className="parent-register-div">
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center bg-image img-bg-register"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/movie-background-collage_23-2149876015.jpg?w=996&t=st=1717657868~exp=1717658468~hmac=07d7cfb138628814f4a4b8d839ff88c4e91a898208e63784c8fc7ddbdb89b10b)",
        }}
      >
        <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
          <MDBCardBody className="px-5">
            <h2 className="text-uppercase text-center mb-5">
              Create an account
            </h2>
            <form onSubmit={handleSubmit}>
              <MDBInput
                wrapperClass="mb-4"
                label="Your Full Name"
                size="lg"
                id="form1"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Your Username"
                size="lg"
                id="form2"
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Your Email"
                size="lg"
                id="form3"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                size="lg"
                id="form4"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Repeat your password"
                size="lg"
                id="form5"
                type="password"
                name="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleChange}
              />
              <div className="d-flex flex-row justify-content-center mb-4">
                <MDBCheckbox
                  id="flexCheckDefault"
                  label="I agree all statements in"
                  name="terms"
                  required
                />
                <a href="*" className="text-muted me-1 ms-1">
                  Terms of use
                </a>
              </div>
              <MDBBtn className="mb-4 w-100" size="lg" type="submit" block>
                Register
              </MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

export default Register;
