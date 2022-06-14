import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginSuccess } from '../../redux/slices/authSlice';

import './Login.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.auth.user);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName && password) {
      if (state.userName == userName && state.pass == password) {
        dispatch(loginSuccess());
        navigate("/mint")
      } else {
        setShowError("Имя пользователя или пароль введены не верно")
        setUserName("");
        setPassword("");
      }
    } else {
      setShowError("Wrong Credentials")
    }
  };

  return (
    <section className="section bg-light">
      <div className="container ht-100 
        d-flex justify-content-center 
        align-items-center flex-column">
        <div className="card p-5 shadow-lg d-flex 
            justify-content-center 
            align-items-center">
          <h3 className="mb-3">Login</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="userName">
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="userName"
                placeholder="Enter userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-1" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="err-block text-danger">
              {showError}
            </div>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className='mt-3'>  
          Or <Link to="/register">register</Link> 
        </div>
      </div>
    </section>
  )
}

export default LoginPage