import React from 'react'
import  styled  from "styled-components";
import { categories } from '../data';
import CatagoryItem from "./CatagoryItem";

const Container = styled.div`
    display: flex;
    padding: 20px;
    background-color: #2d2922;
`
export const Catagories = () => {
  return (
    <Container>
         {categories.map(item=>(
         <CatagoryItem item={item} key={item.id}/>
         ))}
    </Container>
  )
}
