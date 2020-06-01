import React from 'react';
import Clock from '../../assets/images/clock.png';
import {Container, Image} from './styles';
import Authenticator from '../../components/Authenticator';

const Main = () => {
  return (
    <Container>
      <Image source={Clock} resizeMode={'contain'} />
      <Authenticator />
    </Container>
  );
};

export default Main;
