import React from 'react';
import {ThemeProvider} from 'styled-components';

import defaultColors from './config/defaultColors';
import Navigator from './Navigator';

const App = () => {
  return (
    <ThemeProvider theme={defaultColors}>
      <Navigator />
    </ThemeProvider>
  );
};

export default App;
