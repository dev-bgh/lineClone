import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { ReactElement } from 'react';
import { Image, Text } from 'react-native';
import img from '../assets/image/default.png';
import Friend from '../Chat/Friend';
import Chat from '../Chat/Chat';
import Setting from '../Chat/Setting';
import Timeline from '../Chat/Timeline';

const Tab = createBottomTabNavigator();

const TabBarIcon = (focused) => {
    return (
      <Image
        style={{
          width: 24,
          height: 24,
          backgroundColor: focused ? 'white' : 'black'
        }}
        source= {img}
      />
    );
  };

  function Navigator() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarIcon: ({ focused }) => 
            TabBarIcon(focused),
        }}
      >
        <Tab.Screen
          name="친구"
          component={Friend}
          options={{
            tabBarLabel: '친구',
            tabBarIcon: ({ focused }) => 
              TabBarIcon(focused),
          }}
        />
        <Tab.Screen name="대화" component={Chat} />
        <Tab.Screen name="타임라인" component={Timeline} />
        <Tab.Screen name="더보기" component={Setting} />
      </Tab.Navigator>
    );
  }

export default Navigator;