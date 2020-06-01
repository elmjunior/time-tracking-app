import React from 'react';
import {Text} from 'react-native';

import {
  Container,
  SignInButton,
  SignInButtonText,
  SignUpButton,
} from './styles';

const Authenticator = () => {
  return (
    <Container>
      <SignInButton>
        <SignInButtonText>Sign in</SignInButtonText>
      </SignInButton>
      <SignUpButton
        title="create your account"
        accessibilityLabel={'sign up'}
      />
    </Container>
  );
};

export default Authenticator;
