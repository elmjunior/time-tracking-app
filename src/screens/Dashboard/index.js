import React from 'react';

import {Container, Content} from './styles';
import CustomHeader from '../../components/CustomHeader';
import DashboardBox from '../../components/DashboardBox';

const projects = [
  {title: 'Lorem ipsum dolor auhd aishd iuah dsiauhd aiuhd'},
  {title: 'Lorem ipsum dolor'},
  {title: 'Lorem ipsum dolor'},
];

const Dashboard = () => {
  return (
    <Container>
      <Content>
        <CustomHeader />

        <DashboardBox title={'Projects'} data={projects} />
      </Content>
    </Container>
  );
};

export default Dashboard;
