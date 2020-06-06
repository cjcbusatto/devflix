import React from 'react';
import styled from 'styled-components/native';

import Header from '../../components/Header';
import Poster from '../../components/Poster';
import Movies from '../../components/Movies';

const Container = styled.ScrollView`
  flex: 1;
  backgroundColor: #000;
`;

const thumbs = [
    'http://i3.ytimg.com/vi/fYR9L2ZmodM/maxresdefault.jpg',
    'http://i3.ytimg.com/vi/UTfGq8iaSEQ/maxresdefault.jpg',
    'http://i3.ytimg.com/vi/EhnXaybirdA/maxresdefault.jpg',
    'http://i3.ytimg.com/vi/t0mnERa30a0/maxresdefault.jpg',
    'http://i3.ytimg.com/vi/eAXow8r3lYY/maxresdefault.jpg'
]

const Home = () => {
  return (
    <Container>
      <Poster
        url={'http://i3.ytimg.com/vi/NLcXijzqP9M/maxresdefault.jpg'}
        title={'Desafio: 10 projetos rápidos para treinar Programação e conseguir um Emprego'}
        tags={['JavaScript', 'I.A']}
        content={<Header />} 
      />
      <Movies 
        listName={'Recomendados'}
        thumbs={thumbs}
      />
      <Movies 
        listName={'Em alta'}
        thumbs={thumbs}
      />
      <Movies 
        listName={'Desenvolvimento'}
        thumbs={thumbs}
      />
    </Container>
  );
}

export default Home;