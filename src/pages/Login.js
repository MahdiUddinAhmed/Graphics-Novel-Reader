import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/LJxtV7Z/Untitled-1-3x.png")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin: 20px 40px 0px 30px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Button2 = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin: 20px 10px 0px 0px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const linksStyle = {
  textDecoration: 'none',
  color: 'white',
  marginRight: '20px'
}
const a = styled.div`
color: white;
`
const Login = () => {
  const navigate = useNavigate();
  const check = async ()=>{
    if(localStorage.getItem("user")){
      navigate("/products");
    }
  }
  useEffect(()=>{
    check();
  },[])
  const onSubmit = (e)=>{
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    axios.post('http://localhost:5000/api/auth/login', {username,password},{ withCredentials:true})
    .then((res)=>{
      localStorage.setItem('user',"loggedin");
      navigate("/");
    
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <Container>

      <Wrapper>
        <Title> Log In!</Title>
        <Form onSubmit={onSubmit}>
          <Input name="username" placeholder="username" /> 
          <Input name="password" placeholder="password" />
          <Button><a style={linksStyle}  href="/register">Create Account</a></Button>
          <Button2 type="submit">LOG IN</Button2>
        </Form>
      </Wrapper>

    </Container>
  )
}

export default Login
