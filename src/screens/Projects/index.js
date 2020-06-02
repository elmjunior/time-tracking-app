import React from 'react';

import {Container, Content, FlatList} from './styles';
import CustomHeader from '../../components/CustomHeader';
import ProjectListItem from '../../components/ProjectListItem';

const projects = [
  {title: 'Lorem ipsum dolor auhd aishd iuah dsiauhd aiuhd'},
  {title: 'Lorem ipsum dolor'},
  {title: 'Lorem ipsum dolor'},
  {title: 'Lorem ipsum dolor'},
];

const Projects = () => {
  return (
    <Container>
      <Content>
        <CustomHeader back title={'My Projects'} />
        <FlatList
          numColumns={2}
          data={projects}
          keyExtractor={(_, key) => key.toString()}
          renderItem={({item}) => <ProjectListItem project={item} />}
        />
      </Content>
    </Container>
  );
};

export default Projects;
