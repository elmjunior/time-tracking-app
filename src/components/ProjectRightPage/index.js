import React from 'react';

import {Container, Icon, Button} from './styles';

const ProjectRightPage = () => {
  return (
    <Container>
      <Button>
        <Icon name="ios-options" />
      </Button>
      <Button>
        <Icon name="ios-contacts" />
      </Button>
      <Button>
        <Icon name="ios-stats" />
      </Button>

      <Button>
        <Icon name="ios-stopwatch" />
      </Button>
      <Button>
        <Icon name="ios-rocket" />
      </Button>
    </Container>
  );
};

export default ProjectRightPage;
