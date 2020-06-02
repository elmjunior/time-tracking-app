import React from 'react';
import {TouchableOpacity, FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, TitleHolder, Title} from './styles';
import DashboardTaskItem from '../DashboardTaskItem';

const DashboardTasks = ({title, data}) => {
  return (
    <Container>
      <TitleHolder>
        <Title>{title}</Title>
        <TouchableOpacity>
          <Icon name="arrow-right" color="#fff" size={18} />
        </TouchableOpacity>
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
