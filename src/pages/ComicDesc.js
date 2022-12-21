import React from 'react';
import styled from "styled-components";
import Announcement from "../View/Announcement";
import Footer from "../View/Footer";
import Navbar from "../View/Navbar";
import Newsletter from "../View/Newsletter";

import {useParams} from "react-router-dom";
import { getComicById } from '../ComicData';
import Comic from '../View/Comic';


const Container = styled.div`
    background-color: #232020;
`;


const ComicDesc = () => {
  const {comicId} = useParams();
  const comic = getComicById(comicId);
  // const comic = comics.find((comic) => comic.id === parseInt(comicId));

  return (
    <Container>
      <Navbar />
      <Announcement />

      <Comic item={comic} />
      
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ComicDesc;



