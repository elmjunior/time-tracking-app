import React from 'react';

import {Container, Title, Label, CreatedAt, Content} from './styles';

const TaskTimeLog = ({task}) => {
  return (
    <Container>
      <Title>{task.title}</Title>
      <Content>
        <Label>{task.time}</Label>
        <CreatedAt>{task.createdAt}</CreatedAt>
      </Content>
    </Container>
  );
};

export default TaskTimeLog;
