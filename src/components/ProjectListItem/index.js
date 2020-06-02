import React from 'react';
import ProjectImg from '../../assets/images/project.png';
import {Container, Title, Image, TitleHolder} from './styles';

const ProjectListItem = ({project}) => {
  return (
    <Container>
      <Image source={ProjectImg} />
      <TitleHolder>
        <Title>{project.title}</Title>
      </TitleHolder>
    </Container>
  );
};

export default ProjectListItem;
