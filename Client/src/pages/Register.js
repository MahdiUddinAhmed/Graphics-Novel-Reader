import React,{ useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';
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

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
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
const linksStyle = {
  textDecoration: 'none',
  color: 'white',
  marginRight: '20px'
}
const Button2 = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin: 20px 10px 0px 0px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Register = () => {
  const [msg,setMsg] = useState("");
  const onSubmit = async(e)=>{
    e.preventDefault();
    if(e.target.password.value === e.target.confirmpassword.value){
    const res = await axios.post('http://localhost:5000/api/auth/register',{
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    }, {withCredentials:true})
    .then((result)=>{console.log(result)})
    .catch((err)=>{console.log(err)})
  }
  else{
    setMsg("Passwords do not match");
  } 
  }
  return (
    <Container>

      <Wrapper>
        <Title> Create an Account!</Title>
        <Form onSubmit={onSubmit}>
          <Input placeholder="username" name="username"/>
          <Input placeholder="email" name="email" />
          <Input placeholder="password" name="password" />
          <Input placeholder="confirm password" name="confirmpassword"/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button><a style={linksStyle} href="/login">Login</a></Button>
          <Button2 type="submit">Register</Button2>
          <p>&nbsp; {msg} &nbsp;</p>
        </Form>
      </Wrapper>

    </Container>
  )
}

export default Register
