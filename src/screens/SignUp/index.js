import React from 'react';
import {Text} from 'react-native';
import Cat from '../../assets/images/cat2.png';
import SignUpImg from '../../assets/images/SignUp.png';

import {Container, Image, Content} from './styles';
import SignUpForm from '../../components/SignUpForm';

const SignUp = () => {
  return (
    <Container source={Cat}>
      <Content>
        <Image source={SignUpImg} />
        <SignUpForm />
      </Content>
    </Container>
  );
};

export default SignUp;
