import React from 'react';
import { Dimensions } from 'react-native';

import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

const PosterImg = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get('window').height * 70) / 100}px;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
`;

const PosterBottom = styled.View`
  position: absolute;
  width: 100%;
  align-items: center;
  justify-content: center;
  bottom: 8px;
`;

const Title = styled.Text`
  max-width: 95%;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
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
      </PosterBottom>
    </>
  );
}

export default Poster;