import React from 'react';
import styled from 'styled-components';

import Announcement from "../View/Announcement";
import Footer from "../View/Footer";
import Navbar from "../View/Navbar";
import Newsletter from "../View/Newsletter";
import Chapters from "../View/ComicPages";

import {useParams} from "react-router-dom";
import { getChapterPages } from '../ComicData';

const Container = styled.div`
    background-color: #232020;
`
const Chapter = (items) => {
  const {comicId, chapterId} = useParams();
  const chapterPages = getChapterPages(comicId, chapterId);
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Chapters pages={chapterPages}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Chapter
