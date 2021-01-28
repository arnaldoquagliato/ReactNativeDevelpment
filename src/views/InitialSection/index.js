import * as React from 'react';
import { View, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function InitialScreen({ navigation }) {


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('RealmProject')}
        title="Estuding Realm"
        color="#841584"
        ></Button>
    </View>
  );
}


export default InitialScreen