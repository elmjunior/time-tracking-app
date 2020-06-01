import React from 'react';
import {Text} from 'react-native';
import Cat from '../../assets/images/cat2.png';
import SignUpImg from '../../assets/images/SignUp.png';

import {Container, Image, Content} from './styles';

const SignUp = () => {
  return (
    <Container source={Cat}>
      <Content>
        <Image source={SignUpImg} />
      </Content>
    </Container>
  );
};

export default SignUp;
