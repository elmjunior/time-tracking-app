import React from 'react';
import {FlatList} from 'react-native';

import {Container, Title} from './styles';
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
    </Container>
  );
};

export default TaskGroup;
