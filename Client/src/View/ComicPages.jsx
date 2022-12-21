import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
const Container = styled.div`
    display: flex;
    padding: 20px;
    background-color: #2d2922;
`


const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
 
`;

const ImgContainter = styled.div`
    height: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex:1;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin: 20px 40px 0px 30px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const ComicPages = (pages) => {
  const { comicId, chapterId } = useParams();
  pages = pages.pages;

  return (
    <Container>
      <ImgContainter>
        {pages.map((page, i) => (<Image key={i} src={page} />))}
        <Button>
          <a href={`/comic/${comicId}/chapter/${chapterId + 1}`}>Next</a>
        </Button>
      </ImgContainter>
    </Container>
  )
}

export default ComicPages
