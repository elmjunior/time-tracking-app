import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, SignUpButton} from './styles';
import SignInForm from '../SignInForm';

const Authenticator = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <SignInForm />

      <SignUpButton
        onPress={() => navigation.navigate('SignUp')}
        title="create your account"
        accessibilityLabel={'sign up'}
      />
    </Container>
  );
};

export default Authenticator;
