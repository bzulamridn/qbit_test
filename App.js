/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button
} from 'react-native';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import IconIonIcons from 'react-native-vector-icons/Ionicons'

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator, CardStyleInterpolators, cardOverlay } from '@react-navigation/stack';

import Main from './component/Main.js'


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const config = {
  timing: 4000,
  config: {
    stiffness: 3000,
    damping: 5000,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const lightPfxTheme = {
  dark: false,
  colors: {
    primary: 'rgb(58, 176, 123)',
    background: 'rgb(255, 255, 255)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(0, 0, 0)',
    border: 'rgb(100, 100, 100)',
  },
};

const darkPfxTheme = {
  dark: true,
  colors: {
    primary: 'rgb(58, 176, 123)',
    background: 'rgb(0, 0, 0)',
    card: 'rgb(0, 0, 0)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(100, 100, 100)',
  },
};

function Default() {
  return (
    <View style={{height: '100%', width: '100%',}}>
      <View style={{   height: '100%',
        width: '100%',
        backgroundColor: '#dfe6e9',
        position: 'absolute',
        zIndex: -99,
        borderTopLeftRadius: 250}}></View>
    </View>)
}


function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'grey',
        showLabel: false,
        style: {
          height: 70,
          borderTopWidth: 0,
          elevation: 3,
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          elevation: 0,
          backgroundColor: '#dfe6e9'
        }
      }}>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          //title: 'Dashboard',
          //tabBarLabel: false,
          tabBarIcon: ({ color, size }) => (
            <IconMaterial name="home" size={30} color={color} />
          )
        }}
      />
      <Tab.Screen name="Heart"
        name="Doctors"
        component={Default}
        options={{
          title: 'Doctors',
          tabBarIcon: ({ color, size }) => (
            <IconMaterial name="favorite-border" size={30} color={color} />
          )

        }} />
      <Tab.Screen name="Setting"
        name="Reords"
        component={Default}
        options={{
          title: 'Doctors',
          tabBarIcon: ({ color, size }) => (
            <IconIonIcons name="person-outline" size={30} color={color} />
          )
        }} />

    </Tab.Navigator>
  );
}

function App(props) {
  return (
    <NavigationContainer theme={lightPfxTheme}>
      <Stack.Navigator
        initialRouteName='Main'
      // screenOptions={({ route }) => ({
      //   headerShown: false
      // })}
      //headerMode="none"
      >

        <Stack.Screen name="Route" component={MyTabs} options={{ headerShown: false }}/>  
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
});


export default App