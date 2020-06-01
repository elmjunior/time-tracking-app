import React from 'react';
import Cat from '../../assets/images/cat.png';
import Logo from '../../assets/images/logo.png';
import {Container, Image} from './styles';
import Authenticator from '../../components/Authenticator';

const Main = () => {
  return (
    <Container source={Cat}>
      <Image source={Logo} />
      <Authenticator />
    </Container>
  );
};

export default Main;
