import React from 'react';
import {Text} from 'react-native';

import {Container, SearchInput} from './styles';

const CustomHeader = () => {
  return (
    <Container>
      <SearchInput placeholder="Search..." />
    </Container>
  );
};

export default CustomHeader;
