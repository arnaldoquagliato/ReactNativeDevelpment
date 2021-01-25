import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import InitialScreen from './views/InitialSection'


const Stack = createStackNavigator();
const {Screen, Navigator} = Stack
const Router = props => {
  return (
      <Navigator>
        <Screen name="InitialScreen" component={InitialScreen} />
      </Navigator>
  );
}

export default Router