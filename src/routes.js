
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';
const Stack = createStackNavigator();
const {Screen, Navigator} = Stack

import Main from './components/Main'
const Router = props => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Main">
        <Screen name="Main" component={Main} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Router