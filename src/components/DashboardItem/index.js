import React from 'react';

import {Container, Title} from './styles';
import {useNavigation} from '@react-navigation/native';

const DashboardItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.navigate('Project')}>
      <Title>{item.title}</Title>
    </Container>
  );
};

export default DashboardItem;
