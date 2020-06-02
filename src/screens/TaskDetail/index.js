import React from 'react';

import {Container, FlatList} from './styles';
import CustomHeader from '../../components/CustomHeader';
import TaskTimerTotal from '../../components/TaskTimerTotal';
import TaskTimeLog from '../../components/TaskTimeLog';
import TaskTimeTrack from '../../components/TaskTimeTrack';
const data = [
  {
    id: 1,
    title: 'asdasdas asdasd as asdasdas asdasdas asdasdas asdasdas',
    time: '1h',
    createdAt: 'yesterday',
  },
  {id: 1, title: 'asdasdas', time: '3h', createdAt: '2 days ago'},
  {id: 1, title: 'asdasdas', time: '20h30m', createdAt: '3 days ago'},
];
const TaskDetail = () => {
  return (
    <Container>
      <CustomHeader
        back
        title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '}
      />
      <TaskTimerTotal />

      <FlatList
        data={data}
        keyExtractor={(_, key) => key.toString()}
        renderItem={({item}) => <TaskTimeLog task={item} />}
      />
      <TaskTimeTrack />
    </Container>
  );
};

export default TaskDetail;
