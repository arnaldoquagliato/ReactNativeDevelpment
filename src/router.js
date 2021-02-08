import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import InitialScreen from './views/InitialSection'
import RealmProject from './views/RealmProject'

const Stack = createStackNavigator();
const {Screen, Navigator} = Stack
const Router = props => {
  return (
      <Navigator>
        <Screen name="Menu Projects" component={InitialScreen} />
        <Screen name="RealmProject" component={RealmProject} />
      </Navigator>
  );
}

export default Router