import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #232020;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
 
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
 
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  
`;

const Title = styled.h1`
  font-weight: 200;
  color: #d8bbbb;
`;

const Desc = styled.p`
  margin: 20px 0px;
  color: #d8bbbb;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  color: #d8bbbb;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
`;



const Button = styled.button`
  padding: 15px;
  margin-left: 20px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;



const linksStyle = {
  textDecoration: 'none',
  color: 'Black',
  marginRight: '20px'
}
const Comic = (item) => {
  item = item.item;

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={item.coverimg} />
        </ImgContainer>
        <InfoContainer>
          <Title>{item.title}</Title>
          <Desc>
            {item.desc}
          </Desc>
          <Price>$ 20</Price>

          <AddContainer>
            <ul style={{listStyleType: "none"}}>
              {item.chapters.map((chapter) => (
                <li key={chapter.id} >
                  <Button> <a style={linksStyle} href={`/comic/${item.id}/chapter/${chapter.id}`}>
                    {`Chapter ${chapter.id}`}
                  </a>
                  </Button>
                </li>
              ))}
            </ul>

            <Button>Order Now!</Button>
          </AddContainer>
        </InfoContainer>

      </Wrapper>

    </Container>
  );
};

export default Comic;

