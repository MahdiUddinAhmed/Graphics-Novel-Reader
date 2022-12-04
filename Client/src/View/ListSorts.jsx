import React from 'react'
import styled from 'styled-components'
import { AllProducts } from '../data';
import Product from 'E:/Personal Project/Ecommerce/Client/src/View/Product';
const Container = styled.div `
    padding: 2px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color:#2d2922;
    color: #2d2922;
`;
const ListSorts = ({item}) => {
  return (
    <Container>
        {AllProducts.map(item =>
            (<Product item = {item} key={item.id}/>
            ))}
    </Container>
  )
}

export default ListSorts
