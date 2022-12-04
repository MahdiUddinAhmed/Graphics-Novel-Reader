import React from 'react';
import styled from "styled-components";
import Announcement from "../View/Announcement";
import Footer from "../View/Footer";
import Navbar from "../View/Navbar";
import Newsletter from "../View/Newsletter";


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
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  
`;

const FilterText = styled.span`
  color: white ;
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  
`;

const Select = styled.select`
  padding: 5px;
  margin-right: 20px;
 
`;

const Option = styled.option `
  
`
const linksStyle = {
  textDecoration: 'none',
  color: 'Black',
  marginRight: '20px'
}
const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/BCzrC8X/1.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>My Hero Academia</Title>
          <Desc>
          A superhero-loving boy without any powers is determined to enroll in a prestigious hero academy and learn what it really means to be a hero. 
          In a world populated with superhumans, the superhero-loving Izuku Midoriya is without power.
          </Desc>
          <Price>$ 20</Price>
         
          <AddContainer>
          <FilterContainer>
          <Filter>
            <FilterText>
                Chapter
             </FilterText>
             <Select>
                <Option disabled selected>
                     Chapter
                </Option>
                <Option>1</Option>
                <Option>2</Option>
             <Option>3</Option>
              </Select>
            </Filter>
         </FilterContainer>
            <Button><a style={linksStyle} href= "/chapter">READ NOW!</a></Button>
            <Button>Order Now!</Button>     
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;