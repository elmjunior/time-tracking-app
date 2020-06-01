import React from 'react';
import {Text} from 'react-native';

import {Container, SignInButton, SignInButtonText, Input} from './styles';

const SignInForm = () => {
  return (
    <Container>
      <Input
        placeholder="E-mail"
        keyboardAppearance="dark"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
      />

      <Input
        placeholder="Password"
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <SignInButton>
        <SignInButtonText>Sign in</SignInButtonText>
      </SignInButton>
      <Text>SignInForm</Text>
    </Container>
  );
};

export default SignInForm;
