import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
const Info = styled.div `
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;
const Container = styled.div `
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`;
const Circle = styled.div `
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #ffff00;
    position: absolute;

`;
const Image = styled.img `
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div `
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease &hover;

    &:hover {
        background-color: white;
        transform: scale(1.1);
    }
`;

const Button = styled.button `
  margin-top: 100vh;
  z-index: 3;
  width: 60px;
  height: 40px;
  display: flex;
  margin: 10px;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  transition: all 0.5s ease &hover;

&:hover {
    background-color: #a50000;
    transform: scale(1.1);
}
`
const ListSort = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src = {item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
            <   Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
                <Button>READ NOW!</Button>      
        </Info>
        

    </Container>
  )
}

export default ListSort
