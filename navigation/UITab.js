/**
yarn add react-navigation
yarn add react-native-safe-area-context
yarn add @react-navigation/bottom-tabs
yarn add @react-navigation/native
yarn add @react-navigation/native-stack
 */
import React from 'react';
import {Settings,Chat} from '../Screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {fontsizes, colors, icons,images} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Tab = createBottomTabNavigator();
const screenOptions = ({route}) => ({
  headerShown:false,
  tabBarActiveTintColor: colors.backgroundcolor,
  tabBarInactiveTintColor: colors.inactive,
  tabBarActiveBackgroundColor: colors.primary,
  tabBarInactiveBackgroundColor: colors.inactive,
  tabBarIcon: ({focused, color, size}) => {
    let screenName = route.name;
    let iconName = 'accusoft';
    if (screenName == 'Chat') {
      iconName = 'comment';
    } else if (screenName == 'Settings') {
      iconName = 'accusoft';
    } 
    return (
      <Icon
        name={iconName}
        size={26}
        color={focused ? colors.backgroundcolor : colors.inactive}
      />
    );
  },
});
function UITab(props) {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={'Chat'}
        component={Chat}
        options={{
          tabBarLabel: 'Chats',
          headerTitle:'home',
        }}
      />
      <Tab.Screen
        name={'Setting'}
        component={Settings}
        options={{
          tabBarLabel: 'Setting',
        }}
      />
    </Tab.Navigator>
  );
}
export default UITab;
