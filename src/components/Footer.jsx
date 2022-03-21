import React from 'react';
import styled from 'styled-components';
import { Facebook, Instagram, Twitter, Pinterest } from '@material-ui/icons';

const Container = styled.div``;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    
`;

const Desc = styled.p`
    margin: 20px 0; 
`;

const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
`;

const Center = styled.div`
    flex: 1;
`;

const Right = styled.div`
    flex: 1;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Gonzo's E-Commerce</Logo>
                <Desc>
                    Offers you won't believe unless you do a click.
                </Desc>
                <SocialContainer>
                    <SocialIcon>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center></Center>
            <Right></Right>
        </Container>
    );
}

export default Footer;
