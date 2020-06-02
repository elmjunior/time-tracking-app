import React from 'react';

import {Container, Icon, TimeCounter} from './styles';

const TaskTimerTotal = () => {
  return (
    <Container>
      <Icon name="ios-timer" />
      <TimeCounter>24h30m</TimeCounter>
    </Container>
  );
};

export default TaskTimerTotal;
