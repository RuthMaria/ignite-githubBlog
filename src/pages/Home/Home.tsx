import React from 'react';

import cover from '../../assets/cover.svg';
import { Header } from './components/Header';
import { Container } from './Home.styles';

export const Home: React.FC = () => {
  return (
    <Container>
      <img src={cover} alt="" />

      <section>
        <Header />
      </section>
    </Container>
  );
};
