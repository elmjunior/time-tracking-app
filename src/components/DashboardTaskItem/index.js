import React from 'react';

import {Container, Title, Label} from './styles';
import {useNavigation} from '@react-navigation/native';

const DashboardTaskItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.navigate('TaskDetail')}>
      <Title numberOfLines={1}>{item.title}</Title>
      <Label>in progress</Label>
    </Container>
  );
};

export default DashboardTaskItem;
