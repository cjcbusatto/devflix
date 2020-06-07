import React from 'react';
import { TouchableOpacity } from 'react-native';

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

const MenuText = styled.Text`
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
      <TouchableOpacity>
        <MenuText>Playlists</MenuText>
      </TouchableOpacity>
      <TouchableOpacity>
        <MenuText>Vídeos</MenuText>
      </TouchableOpacity>
      <TouchableOpacity>
        <MenuText>Minha lista</MenuText>
      </TouchableOpacity>
    </Container>  
  );
}

export default Header;