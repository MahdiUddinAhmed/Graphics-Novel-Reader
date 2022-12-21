import React from 'react'
import styled from 'styled-components'
import { comics } from 'E:/Personal Project/Graphics-Novel-Reader/Graphics-Novel-Reader/Client/src/ComicData'
import Product from './Product'
const Container = styled.div `
    padding: 2px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color:#2d2922;
    color: #2d2922;
`;
const Products = ({item}) => {
  return (
    <Container>
        {comics.map(item =>
            (<Product item = {item} key={item.id}/>
            ))}
    </Container>
  )
}

export default Products
