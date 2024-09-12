import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BatteryScreen from './screens/BatteryScreen';
import HomeScreen from './screens/HomeScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Battery" component={BatteryScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
