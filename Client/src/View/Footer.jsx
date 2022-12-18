import { Email, Facebook, Instagram, Phone, Pinterest, Room, Twitter, YouTube } from '@material-ui/icons'
import styled from 'styled-components'
import React from 'react'
const Container = styled.div `
    display: flex;
   
`;
const Left = styled.div `
    flex: 1;
    padding: 20px;
`;
const Center = styled.div `
    flex: 1;
    padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div `
    flex: 1;
    padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;
const Logo = styled.h1``;
const Desc = styled.p `
    margin: 20px opx;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 45%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>PICK IT!</Logo>
            <Desc>Thank you for using us! If you loved a 
                  graphics novel from  our collection do
                  order  from  us and support the artist.
                  For any issues reach out to us via  our
                  social  media  outlets. Always  here to
                  serve.  
            </Desc>
            <SocialContainer>
                <SocialIcon color = '3B5999'>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color = "55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color = "E60023">
                    <YouTube/>
                </SocialIcon>
                <SocialIcon color = "E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon  color ="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links!</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Manga</ListItem>
                <ListItem>Comic</ListItem>
                <ListItem>Webtoon</ListItem>
                <ListItem>Favourite</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Order</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>Account</ListItem>
                <ListItem>Terms and Condition</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem> 
                <Room/> 420, Gothaam Park, Metropolis, Tokyo
            </ContactItem>
            <ContactItem> 
               <Phone/>  +8801883422698
            </ContactItem>
            <ContactItem> 
               <Email/>  contact@pick.it
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer
