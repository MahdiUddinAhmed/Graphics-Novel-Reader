import React from 'react'
import styled from "styled-components"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { useState } from 'react';
import { sliderItems } from '../data';
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #231915;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    overflow: hidden;
    opacity: .5;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform:translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`

    width: 100vw;
    height: 80vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
    margin: auto;
`;
const ImgContainter = styled.div`
     margin-left: 25px;
    height: 100%;
    flex:1;
`;
const Image = styled.img `
    margin-top: 25px;
    margin-left: 50px;
    height: 80%;
    
`;
const InfoContainer = styled.div`

    flex:1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
    color: white;
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-style: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-style: 20px;
    background-color: transparent ;
    cursor: pointer;
`;
const linksStyle = {
    textDecoration: 'none',
    color: 'white',
    marginRight: '20px'
}
const Slider = () => {
    const[slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
      
        if(direction==="left"){
            setSlideIndex(slideIndex> 0 ? slideIndex-1 : 2)
        } else {
            setSlideIndex(slideIndex <2 ? slideIndex +1 : 0)
        }
    };
  return (
    
    
    <Container>
        <Arrow direction = "left" onClick={()=>handleClick("left")} >
            <ArrowLeftOutlinedIcon/>
        </Arrow>
        <Wrapper slideIndex = {slideIndex}>
            {sliderItems.map((item) => (
            <Slide bg= {item.bg} key={item.id}>
            <ImgContainter>
                <Image src ={item.img} />
            </ImgContainter>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button> <a style={linksStyle} href= "/comiclist">READ NOW!</a></Button>
            </InfoContainer>
            </Slide>))}
        </Wrapper>
        
        <Arrow Arrow direction = "right"onClick={()=>handleClick("right")}>
            <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider
