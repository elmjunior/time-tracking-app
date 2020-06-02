import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './screens/Main';
import SignUp from './screens/SignUp';
import Dashboard from './screens/Dashboard';
import Projects from './screens/Projects';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={null}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Projects" component={Projects} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
