import "./style.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const Register = () => {
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
            <MDBInput
              wrapperClass="mb-4"
              label="Your Full Name"
              size="lg"
              id="form1"
              type="text"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Your Username"
              size="lg"
              id="form2"
              type="text"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Your Email"
              size="lg"
              id="form3"
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              size="lg"
              id="form4"
              type="password"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Repeat your password"
              size="lg"
              id="form5"
              type="password"
            />
            <div className="d-flex flex-row justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I agree all statements in"
              />
              <a href="*" className="text-muted me-1 ms-1">
                Terms of use
              </a>
            </div>
            <MDBBtn className="mb-4 w-100" size="lg">
              Register
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

export default Register;
