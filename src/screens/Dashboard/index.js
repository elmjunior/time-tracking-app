import React from 'react';
import {Text} from 'react-native';

import {Container, Content} from './styles';
import CustomHeader from '../../components/CustomHeader';

const Dashboard = () => {
  return (
    <Container>
      <Content>
        <CustomHeader />
        <Text>Dashboard</Text>
      </Content>
    </Container>
  );
};

export default Dashboard;
