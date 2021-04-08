import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function () {
  return (
    <Tab.Navigator>
      <Tab.Screen />
    </Tab.Navigator>
  );
}
