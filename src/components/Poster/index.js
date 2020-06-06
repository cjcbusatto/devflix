import React from 'react';
import { Dimensions } from 'react-native';

import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather, Ionicons } from '@expo/vector-icons'

const PosterImg = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get('window').height * 36) / 100}px;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
`;

const PosterBottom = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  max-width: 90%;
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;
  text-align: center;
  line-height: 18px;
  color: #fff;
`;

const TagMenu = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  flex-direction: row;
`;

const Tag = styled.Text`
  font-size: 13px;
  color: #fff;
`;

const Separator = styled.View`
  width: 3px;
  height: 3px;
  background-color: #fff;
  margin: 0px 8px;
  border-radius: 3px
`;

const ActionMenu = styled.View`
  width: 90%;
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  align-items: center;
`;

const TextButton = styled.Text`
  color: #fff;
  font-size: 13px;
  margin-top: 3px;
`;

const Play = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #fff;
  width: 142px;
  height: 32px;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
`;

const TextPlayBtn = styled.Text`
  font-size: 15px;
  font-weight: 700;
  padding-left: 5px;
`;

const Poster = ({url, content, title, tags}) => {
  return (
    <>
      <PosterImg 
        source={{uri: url}} 
        resizeMode='stretch'
      >
        <Gradient
          Location={[0, 0.3, 0.6, 0.93]}
          colors={[
              'rgba(0,0,0,0.7)',
              'rgba(0,0,0,0.4)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,1)',
          ]}
        >
          {content}
        </Gradient>
      </PosterImg>
      <PosterBottom>
        <Title>{title}</Title>
        <TagMenu>
          <Tag>{tags[0]}</Tag>
          <Separator />
          <Tag>{tags[1]}</Tag>
        </TagMenu>
        <ActionMenu>
          <Button>
            <Feather name='plus' size={26} color='#fff' />
            <TextButton>Minha lista</TextButton>
          </Button>
          <Play>
            <Ionicons name='ios-play' size={26} />
            <TextPlayBtn>Assistir</TextPlayBtn>
          </Play>
          <Button>
            <Feather name='info' size={22} color='#fff' />
            <TextButton>Saiba mais</TextButton>
          </Button>
        </ActionMenu>
      </PosterBottom>
    </>
  );
}

export default Poster;