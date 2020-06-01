import React from 'react';
import Clock from '../../assets/images/clock.png';
import {Container, Image} from './styles';

const Main = () => {
  return (
    <Container>
      <Image source={Clock} resizeMode={'contain'} />
    </Container>
  );
};

export default Main;
