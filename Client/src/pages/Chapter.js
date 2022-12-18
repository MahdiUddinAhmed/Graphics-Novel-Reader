import React from 'react';
import styled from 'styled-components';

import Announcement from "../View/Announcement";
import Footer from "../View/Footer";
import Navbar from "../View/Navbar";
import Newsletter from "../View/Newsletter";
import Chapters from "../View/Chapters";

const Container = styled.div`
    background-color: #232020;
`
const Chapter = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Chapters/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Chapter
