import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  padding: 20px 0;
`;

const Label = styled.Text`
  color: #fff;
  font-size: 16px;
  margin: 0 0 5px 10px;
`;

const MovieScroll = styled.ScrollView`
  padding-left: 10px;
`;

const MovieCard = styled.View`
  padding-right: 9px;
`;

const MovieImg = styled.Image`
  width: 140px;
  height: 80px;
`;

const Movies = ({ listName, thumbs }) => {
  return (
    <Container>
      <Label>{listName}</Label>
      <MovieScroll horizontal>
        {thumbs.map((thumb, item) => {
          return (
            <MovieCard key={String(item)}>
              <MovieImg 
                source={{
                  uri: thumb
                }}
              />
            </MovieCard>
          )
        })}
      </MovieScroll>
    </Container>
  );
}

export default Movies;