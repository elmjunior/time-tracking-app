import React from 'react';

import {Container} from './styles';

import TaskGroup from '../TaskGroup';

const ProjectLeftPage = () => {
  return (
    <Container>
      <TaskGroup title={'to do'} />
      <TaskGroup title={'in progress'} />
      <TaskGroup title={'done'} />
    </Container>
  );
};

export default ProjectLeftPage;
