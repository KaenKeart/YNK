import React from "react";
import { Container, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom"; // นำเข้า Link
import "semantic-ui-css/semantic.min.css";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <Container className="custom-segment">
        <div className="custom-center-content">
          <Header as="h1">
            <Link
              to="/Home3"
              className="custom-nav-link active"
              aria-current="page"
            >
              Login
            </Link>
          </Header>
          <Link to="/Home3">
            <Button type="submit" className="custom-form-button">
              Login
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Login;
