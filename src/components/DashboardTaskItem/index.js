import React from 'react';
import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, Title, Label} from './styles';

const DashboardTaskItem = ({item}) => {
  return (
    <Container>
      <Title numberOfLines={1}>{item.title}</Title>
      <Label>in progress</Label>
    </Container>
  );
};

export default DashboardTaskItem;
