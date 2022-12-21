import React from 'react'
import styled from 'styled-components'
import { comics } from 'E:/Personal Project/Graphics-Novel-Reader/Graphics-Novel-Reader/Client/src/ComicData'
import ComicList from 'E:/Personal Project/Graphics-Novel-Reader/Graphics-Novel-Reader/Client/src/View/ComicList'
const Container = styled.div `
    padding: 2px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color:#2d2922;
    color: #2d2922;
`;
const ComicLists = ({item}) => {
  return (
    <Container>
        {comics.map(item =>
            (<ComicList item = {item} key={item.id}/>
            ))}
    </Container>
  )
}

export default ComicLists
