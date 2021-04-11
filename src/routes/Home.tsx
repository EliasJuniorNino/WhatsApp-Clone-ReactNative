import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
} from '@react-navigation/material-top-tabs';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialTopTabNavigator();

import CameraPicker from '../pages/CameraPicker';
import Chats from '../pages/Chats';
import Status from '../pages/Status';
import Calls from '../pages/Calls';

const chatsCount: number = 4;
const statusCount: number = 0;
const callsCount: number = 0;

export default function () {
  return (
    <Tab.Navigator
      initialRouteName="chats"
      backBehavior="none"
      tabBar={params => <MaterialTopTabBar {...params} />}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: '#83aea9',
        tabStyle: {},
        indicatorStyle: {
          backgroundColor: 'white',
          elevation: 1,
        },
        style: {
          backgroundColor: '#075e54',
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="camera"
        component={CameraPicker}
        options={{
          tabBarLabel: () => (
            <FontAwesome
              name="camera"
              color="#83aea9"
              size={20}
              style={styles.cameraIcon}
            />
          ),
        }}
      />

      <Tab.Screen
        name="chats"
        component={Chats}
        options={{
          tabBarLabel: ({color}) => (
            <View style={styles.chatsContainer}>
              <Text numberOfLines={1} style={{color, ...styles.chatsText}}>
                CONVERSAS
              </Text>
              {chatsCount > 0 ? (
                <Text
                  style={{
                    backgroundColor: color,
                    ...styles.chatsBadgeText,
                  }}>
                  {chatsCount}
                </Text>
              ) : null}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="status"
        component={Status}
        options={{
          tabBarLabel: ({color}) => (
            <View style={styles.chatsContainer}>
              <Text numberOfLines={1} style={{color, ...styles.chatsText}}>
                STATUS
              </Text>
              {statusCount > 0 ? (
                <Text
                  style={{
                    backgroundColor: color,
                    ...styles.chatsBadgeText,
                  }}>
                  {statusCount}
                </Text>
              ) : null}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="calls"
        component={Calls}
        options={{
          tabBarLabel: ({color}) => (
            <View style={styles.chatsContainer}>
              <Text numberOfLines={1} style={{color, ...styles.chatsText}}>
                CHAMADAS
              </Text>
              {callsCount > 0 ? (
                <Text
                  style={{
                    backgroundColor: color,
                    ...styles.chatsBadgeText,
                  }}>
                  {callsCount}
                </Text>
              ) : null}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  cameraIcon: {},
  chatsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  chatsText: {
    fontWeight: 'bold',
    fontSize: 15,
    flexWrap: 'nowrap',
  },
  chatsBadgeText: {
    flexWrap: 'nowrap',
    marginLeft: 5,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#075e54',
    textAlignVertical: 'center',
    textAlign: 'center',
    padding: 2,
    lineHeight: 18,
    minHeight: 22,
    minWidth: 22,
    borderRadius: 22,
  },
});
