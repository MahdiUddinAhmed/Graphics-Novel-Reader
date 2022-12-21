import React from 'react';
import styled from 'styled-components'
const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;
const Image = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Info = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;
const linksStyle = {
    textDecoration: 'none',
    color: 'black',
    marginRight: '20px'
}
const Info2 = styled.button`
    border: none;
    color: #ffffff;
    padding: 10px;
    background-color: rgba(0,0,0,0.6);
    font-weight: 600;
`
const Title = styled.h1 `
    z-index: 2;
    color: #ffffff;
    font-weight: bold;
    margin-bottom: 20px;
`;
const Button = styled.button `
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`;
const CatagoryItem = ({item}) => {
  return (
    <Container>
        <Image src = {item.img}/>
        <Info>
            <Title><Info2>{item.title}</Info2></Title>
            <Button><a style={linksStyle} href = "/comiclist">READ NOW!</a></Button>
        </Info>
    </Container>
  )
}

export default CatagoryItem
