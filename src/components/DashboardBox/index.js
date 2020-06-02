import React from 'react';
import {TouchableOpacity, FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, TitleHolder, Title} from './styles';
import DashboardItem from '../DashboardItem';

const DashboardBox = ({data, title, handleClik}) => {
  return (
    <Container>
      <TitleHolder>
        <Title>{title}</Title>
        {handleClik && (
          <TouchableOpacity onPress={handleClik}>
            <Icon name="arrow-right" color="#fff" size={18} />
          </TouchableOpacity>
        )}
      </TitleHolder>
      <FlatList
        data={data}
        horizontal={true}
        keyExtractor={(_, key) => key.toString()}
        renderItem={({item}) => <DashboardItem item={item} />}
      />
    </Container>
  );
};

export default DashboardBox;
