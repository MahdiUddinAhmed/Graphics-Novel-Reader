import React from 'react'
import styled  from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
    height: 60px;
    background-color: red;
    
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;


`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
   
`;
const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;
const Input = styled.input`
    border:  none;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const linksStyle = {
    textDecoration: 'none',
    color: 'white',
    marginRight: '20px'
}
const Right = styled.div`
    flex: 1;
    display: flex;
    color:white;
    cursor: pointer;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                  <Input/>
                <SearchIcon style = {{color: "gray", fontsize: 16}}/>
            </SearchContainer>
        </Left>
        <Center><Logo><a style={linksStyle} href = "/">READ IT!</a></Logo></Center>
        <Right>
            <a style={linksStyle} href="/register"><MenuItem>REGISTER</MenuItem></a>
            <a style={linksStyle} href="/login"><MenuItem>SIGN IN</MenuItem></a>
            <MenuItem><Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon />
                </Badge> </MenuItem>
        </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar