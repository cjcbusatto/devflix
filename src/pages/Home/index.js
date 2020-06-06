import React from 'react';
import styled from 'styled-components/native';

import Poster from '../../components/Poster';
import Header from '../../components/Header';

const Container = styled.ScrollView`
  flex: 1;
  backgroundColor: #000;
`;

const Home = () => {
  return (
    <Container>
      <Poster
        url={'http://i3.ytimg.com/vi/fYR9L2ZmodM/maxresdefault.jpg'}
        title={'Desafio: 10 projetos rápidos para treinar Programação e conseguir um Emprego'}
        tags={['JavaScript', 'I.A']}
        content={<Header />} 
      />
    </Container>
  );
}

export default Home;