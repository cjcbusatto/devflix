import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  margin-top: 20px;
`;

const Logo = styled.Image`
  width: 20px;
  height: 35px;
`;

const Menu = styled.Text`
  font-size: 18px;
  color: #fff;
`;

const Header = () => {
  return (
    <Container>
      <Logo 
        source={require('../../assets/short-logo.png')}
        resizeMode='contain'
      />
      <Menu>Playlists</Menu>
      <Menu>Vídeos</Menu>
      <Menu>Minha lista</Menu>
    </Container>  
  );
}

export default Header;