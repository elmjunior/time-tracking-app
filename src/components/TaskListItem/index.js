import React from 'react';

import {Container, Title, Time} from './styles';

const TaskListItem = ({task}) => {
  return (
    <Container>
      <Title>{task.title}</Title>
      <Time>2h 30m</Time>
    </Container>
  );
};

export default TaskListItem;
