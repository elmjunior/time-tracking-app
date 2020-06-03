import React from 'react';

import {Container, Title, LoadMoreContainer, LoadMoreText} from './styles';
import TaskListItem from '../TaskListItem';

const tasks = [
  {id: 1, title: 'Lorem ipsum dolor auhd aishd iuah dsiauhd aiuhd'},
  {id: 2, title: 'Lorem ipsum dolor'},
  {id: 3, title: 'Lorem ipsum dolor'},
  {id: 4, title: 'Lorem ipsum dolor'},
];

const TaskGroup = ({title}) => {
  return (
    <Container>
      <Title>{title}</Title>
      {tasks.map((item) => (
        <TaskListItem task={item} key={item.id} />
      ))}
      <LoadMoreContainer>
        <LoadMoreText>more...</LoadMoreText>
      </LoadMoreContainer>
    </Container>
  );
};

export default TaskGroup;
