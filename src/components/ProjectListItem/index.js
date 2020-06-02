import React from 'react';
import ProjectImg from '../../assets/images/project.png';
import {Container, Title, Image, TitleHolder} from './styles';
import {useNavigation} from '@react-navigation/native';

const ProjectListItem = ({project}) => {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.navigate('Project')}>
      <Image source={ProjectImg} />
      <TitleHolder>
        <Title>{project.title}</Title>
      </TitleHolder>
    </Container>
  );
};

export default ProjectListItem;
