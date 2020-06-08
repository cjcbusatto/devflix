import React from 'react';

import styled from 'styled-components/native';

import Header from '../../components/Header';
import Poster from '../../components/Poster';
import Movies from '../../components/Movies';

import videos from '../../services/videos.js';

const Container = styled.ScrollView`
  flex: 1;
  backgroundColor: #000;
`;

const getRandomVideo = () => {
  const max = Math.floor(videos.length);
  const random = Math.floor(Math.random() * max);

  return videos[random];
}

const getRandomArrayVideos = (arrayLength) => {
  let randomArrayVideos = [];
  
  for (let i = 0; i < arrayLength; i++) {
    randomArrayVideos.push(getRandomVideo());
  }

  return randomArrayVideos;
}

const getImageUrl = (id) => {
  const imageUrl = `http://i3.ytimg.com/vi/${id}/maxresdefault.jpg`;
  return imageUrl;
}

const getVideoUrl = (id) => {
  const videoUrl = `https://www.youtube.com/embed/${id}`;
  return videoUrl;
}

const randomPoster = getRandomVideo();

const Home = () => {
  return (
    <Container>
      <Poster
        image={getImageUrl(randomPoster.videoId)}
        title={randomPoster.title}
        tags={randomPoster.tags}
        menu={<Header />} 
      />
      <Movies 
        listName={'Recomendados'}
        videos={getRandomArrayVideos(7)}
      />
      <Movies 
        listName={'Em alta'}
        videos={getRandomArrayVideos(5)}
      />
      <Movies 
        listName={'Desenvolvimento'}
        videos={getRandomArrayVideos(9)}
      />
      <Movies 
        listName={'Programação'}
        videos={getRandomArrayVideos(6)}
      />
      <Movies 
        listName={'Code'}
        videos={getRandomArrayVideos(7)}
      />
    </Container>
  );
}

export default Home;