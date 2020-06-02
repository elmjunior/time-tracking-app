import React from 'react';
import {View} from 'react-native';

import {ItemContainer, ProjectTitle} from './styles';

const ProjectsHome = ({item}) => {
  return (
    <ItemContainer>
      <ProjectTitle>{item.title}</ProjectTitle>
    </ItemContainer>
  );
};

export default ProjectsHome;
