import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, Title, TitleHolder} from './styles';
import ProjectItem from './ProjectItem';
const items = [
  {title: 'Lorem ipsum dolor auhd aishd iuah dsiauhd aiuhd'},
  {title: 'Lorem ipsum dolor'},
  {title: 'Lorem ipsum dolor'},
];
const ProjectsHome = () => {
  return (
    <Container>
      <TitleHolder>
        <Title>Projects</Title>
        <TouchableOpacity>
          <Icon name="arrow-right" color="#fff" size={18} />
        </TouchableOpacity>
      </TitleHolder>
      <FlatList
        data={items}
        horizontal={true}
        keyExtractor={(_, key) => key.toString()}
        renderItem={({item}) => <ProjectItem item={item} />}
      />
    </Container>
  );
};

export default ProjectsHome;
