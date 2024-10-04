import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import HomeScreen from './tabs/HomeScreen';
import Profile from './tabs/Profile';
import TransactionScreen from './tabs/TransactionScreen';
import WishlistScreen from './tabs/WishlistScreen';
import NotificationScreen from './tabs/NotificationScreen';
import Coupons from './tabs/Coupons';
import Bills from './tabs/Bills';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline'; // Ionicons
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Transaction') {
              iconName = focused ? 'swap' : 'swap'; 
              return <AntDesign name={iconName} size={size} color={color} />;
            } else if (route.name === 'Coupons') {
              iconName = focused ? 'ticket' : 'ticket';
              return <MaterialCommunityIcons name={iconName} size={24} color={color} />
            } else if (route.name === 'Bills') {
              iconName = focused ? 'filetext1' : 'filetext1';
              return <AntDesign name={iconName} size={size} color={color} />;
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user';
              return <AntDesign name={iconName} size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#fafafa',
            paddingBottom: 5,
            paddingTop: 5,
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 5,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Transaction" component={TransactionScreen} />
        <Tab.Screen name="Coupons" component={Coupons} />
        <Tab.Screen name="Bills" component={Bills} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
