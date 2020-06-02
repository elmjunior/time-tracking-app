import React from 'react';

import {Container, Title} from './styles';

const DashboardItem = ({item}) => {
  return (
    <Container>
      <Title>{item.title}</Title>
    </Container>
  );
};

export default DashboardItem;
