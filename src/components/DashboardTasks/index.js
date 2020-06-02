import React from 'react';
import {FlatList} from 'react-native';

import {Container, TitleHolder, Title} from './styles';
import DashboardTaskItem from '../DashboardTaskItem';

const DashboardTasks = ({title, data}) => {
  return (
    <Container>
      <TitleHolder>
        <Title>{title}</Title>
      </TitleHolder>
      <FlatList
        data={data}
        keyExtractor={(_, key) => key.toString()}
        renderItem={({item}) => <DashboardTaskItem item={item} />}
      />
    </Container>
  );
};

export default DashboardTasks;
