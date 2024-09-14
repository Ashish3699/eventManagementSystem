import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleLoginSubmit = (e) => {
    console.log("loginData:", loginData)
      // const response = await axios.post(`${BaseURL}/auth/login`, loginData);
      if (loginData.email && loginData.password) {
        navigate("/eventList");
      }
    setLoginData({ email: "", password: "" });
  };
  return (
    <>
      <div className="event-form-container">
        <h1 className="">LOGIN</h1>
        <Form className="event-form" onSubmit={(e) => handleLoginSubmit(e)}>
          <Form.Group  controlId="formGroupEmail">
            <Form.Label className="" style={{color: "#000"}}>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              required
              placeholder="Enter email"
              value={loginData.email}
              onChange={handleLoginChange}
              className="bg-dark text-white"
            />
          </Form.Group>
          <Form.Group className="" controlId="formGroupPassword" style={{marginTop: "15px"}}>
            <Form.Label className="fw" style={{color: "#000"}}>Password</Form.Label>
            <Form.Control
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              required
              value={loginData.password}
              onChange={handleLoginChange}
              className="bg-dark text-white pe-5"
            />
          </Form.Group>
          <Button
            className="create-event-link"
            style={{ marginTop: "20px" }}
            variant="outline-success"
            type="submit"
            // onClick={() => handleLoginSubmit()}
          >
            LOGIN
          </Button>{" "}
        </Form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
