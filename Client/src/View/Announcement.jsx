import React from "react";
import styled from "styled-components";


const Container = styled.div`
    height: 30px;
    background-color: #ff3737;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: 14px;
    font-weight: 500;
`
const Announcement  = () => {
    return (
        <Container>
            ফ্রি শিপিং!
        </Container>
    )
}

export default Announcement