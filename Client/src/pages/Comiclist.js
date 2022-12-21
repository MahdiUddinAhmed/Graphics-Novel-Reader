import React from 'react';
import styled from "styled-components";
import Navbar from "../View/Navbar";
import Announcement from "../View/Announcement";
import ComicLists from "../View/ComicLists";
import Newsletter from "../View/Newsletter";
import Footer from "../View/Footer";


const Container = styled.div`
    background-color:#2d2922;
    color: #2d2922;
`;

const Title = styled.h1`
  margin: 20px;
  color: white;
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


const Comiclist = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Read Here</Title>
      <FilterContainer>
        <Filter>
          <FilterText>
          Genre:
          </FilterText>
          <Select>
            <Option disabled selected>
              Type
            </Option>
            <Option>Manga</Option>
            <Option>Comic</Option>
            <Option>Webtoon</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Genre
            </Option>
            <Option>Action</Option>
            <Option>Drama</Option>
            <Option>Mystrey</Option>
            <Option>Shounen</Option>
            <Option>Superhero</Option>
            <Option>Romance</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>
            Sort:
          </FilterText>
        </Filter>
      </FilterContainer>
      <ComicLists />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Comiclist;