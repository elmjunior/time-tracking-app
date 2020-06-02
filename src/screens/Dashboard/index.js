import React from 'react';
import {Text} from 'react-native';

import {Container, Content} from './styles';
import CustomHeader from '../../components/CustomHeader';
import ProjectsHome from '../../components/ProjectsHome';

const Dashboard = () => {
  return (
    <Container>
      <Content>
        <CustomHeader />
        <ProjectsHome />
      </Content>
    </Container>
  );
};

export default Dashboard;
