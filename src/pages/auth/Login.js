import React from "react";
import { Row, Col } from "react-bootstrap";
import AOS from "aos";
import LoginForm from "../../components/login/Form";

const Login = () => {
  AOS.init({
    duration: 2000,
    once: false,
  });

  return (
    <Row className="w-100 login-page p-0  m-0  justify-content-center">
          <Col md={6} className="p-4">
            <LoginForm />
          </Col>
      <Col md={6} className="p-0 image">
            <div className=" d-flex align-items-center justify-content-center h-100">
              <img
                data-aos="zoom-in"
                src="Lawyer-bro 2.png"
                className="w-50"
                alt='Tqneen'
              />
            </div>
          </Col>
        </Row>

  );
};

export default Login;
