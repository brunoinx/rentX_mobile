import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SplashScreen } from '../components/SplashScreen';
import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { ScheduleDone } from '../screens/ScheduleDone';
import { MyCars } from '../screens/MyCars';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="ScheduleDone" component={ScheduleDone} />
      <Screen name="MyCars" component={MyCars} />
      <Screen name="SplashScreen" component={SplashScreen} />
    </Navigator>
  );
}