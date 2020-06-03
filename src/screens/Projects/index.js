import React from 'react';

import {Container, FlatList} from './styles';
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
      <CustomHeader back title={'My Projects'} />
      <FlatList
        numColumns={2}
        data={projects}
        keyExtractor={(_, key) => key.toString()}
        renderItem={({item}) => <ProjectListItem project={item} />}
      />
    </Container>
  );
};

export default Projects;
