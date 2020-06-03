import React from 'react';

import {Container} from './styles';
import CustomHeader from '../../components/CustomHeader';
import DashboardBox from '../../components/DashboardBox';
import DashboardTasks from '../../components/DashboardTasks';

const projects = [
  {title: 'Lorem ipsum dolor auhd aishd iuah dsiauhd aiuhd'},
  {title: 'Lorem ipsum dolor'},
  {title: 'Lorem ipsum dolor'},
];

const Dashboard = ({navigation}) => {
  return (
    <Container>
      <CustomHeader />

      <DashboardBox
        title={'Projects'}
        data={projects}
        handleClik={() => navigation.navigate('Projects')}
      />
      <DashboardTasks title={'Working On'} data={projects} />
    </Container>
  );
};

export default Dashboard;
