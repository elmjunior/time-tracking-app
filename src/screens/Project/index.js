import React from 'react';

import {Container, Content, ContentInside, RightPane} from './styles';
import CustomHeader from '../../components/CustomHeader';
import ProjectRightPage from '../../components/ProjectRightPage';
import ProjectLeftPage from '../../components/ProjectLeftPage';

const Project = () => {
  return (
    <Container>
      <Content>
        <CustomHeader back title={' Project Details'} />
        <ContentInside>
          <ProjectLeftPage />

          <RightPane>
            <ProjectRightPage />
          </RightPane>
        </ContentInside>
      </Content>
    </Container>
  );
};

export default Project;
