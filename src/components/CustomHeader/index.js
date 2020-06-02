import React from 'react';
import {StatusBar} from 'react-native';
import {Container, SearchInput, Icon, Button} from './styles';

const CustomHeader = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Button>
        <Icon name="bell" />
      </Button>
      <SearchInput placeholder="Search..." />
      <Button>
        <Icon name="plus-circle" primary />
      </Button>
    </Container>
  );
};

export default CustomHeader;
