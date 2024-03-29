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

const MovieCard = styled.TouchableOpacity`
  padding-right: 9px;
  align-items: center;
`;

const MovieImg = styled.Image`
  width: 160px;
  height: 90px;
  border-radius: 5px;
`;

const MovieChannel = styled.Text`
  color: #bebebe;
  font-size: 14px;
`;

const getImageUrl = (id) => {
  const imageUrl = `http://i3.ytimg.com/vi/${id}/maxresdefault.jpg`;
  return imageUrl;
}

const playVideo = (videoId) => {
    alert(videoId);
}

const Movies = ({ listName, videos }) => {
  return (
    <Container>
      <Label>{listName}</Label>
      <MovieScroll horizontal>
        {videos.map((video, item) => {
          return (
            <MovieCard 
                key={String(item)}
                onPress={() => {playVideo(video.videoId)}}    
            >
              <MovieImg 
                source={{
                  uri: getImageUrl(video.videoId)
                }}
              />
              <MovieChannel>{video.channel}</MovieChannel>
            </MovieCard>
          )
        })}
      </MovieScroll>
    </Container>
  );
}

export default Movies;