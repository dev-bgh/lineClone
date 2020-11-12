import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { ReactElement } from 'react';
import { Image, Text } from 'react-native';
import img from '../assets/image/default.png';
import Friend from '../Chat/Friend';
import Chat from '../Chat/Chat';
import Setting from '../Chat/Setting';
import Timeline from '../Chat/Timeline';
import friendOff from '../assets/image/friendOff.png';
import friendOn from '../assets/image/friendOn.png';
import messageOff from '../assets/image/messageOff.png';
import messageOn from '../assets/image/messageOn.png';
import moreOn from '../assets/image/moreOn.png';
import moreOff from '../assets/image/moreOff.png';
import timeOn from '../assets/image/timeOn.png';
import timeOff from '../assets/image/timeOff.png';


const Tab = createBottomTabNavigator();

const FriendIcon = (focused) => {
    return (
      <Image
        source={ focused ? friendOn : friendOff }
        style={{
          width: 25,
          height: 25,
        }}
      />
    );
  };

  const ChatIcon = (focused) => {
    return (
      <Image
        source={ focused ? messageOn : messageOff }
        style={{
          width: 25,
          height: 25,
        }}
      />
    );
  };

  const TimelineIcon = (focused) => {
    return (
      <Image
        source={ focused ? timeOn : timeOff }
        style={{
          width: 25,
          height: 25,
        }}
      />
    );
  };

  const SettingIcon = (focused) => {
    return (
      <Image
        source={ focused ? moreOn : moreOff }
        style={{
          width: 25,
          height: 25,
        }}
      />
    );
  };

  function Navigator() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="친구"
          component={Friend}
          options={{
            tabBarIcon: ({ focused }) => 
              FriendIcon(focused),
          }}
        />
        <Tab.Screen name="대화" component={Chat} 
          options={{
            tabBarIcon: ({ focused }) => 
              ChatIcon(focused),
          }}/>
        <Tab.Screen name="타임라인" component={Timeline} 
          options={{
            tabBarIcon: ({ focused }) => 
              TimelineIcon(focused),
          }}/>
        <Tab.Screen name="더보기" component={Setting} 
          options={{
            tabBarIcon: ({ focused }) => 
              SettingIcon(focused),
          }}/>
      </Tab.Navigator>
    );
  }

export default Navigator;