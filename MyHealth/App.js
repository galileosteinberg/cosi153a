import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HeartRate from './components/HeartRate';
import Emergency from './components/Emergency';
import PersonalData from './components/PersonalData';
import HomePage from './components/HomePage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen name="HomePage" component={HomePage} options={{ title: 'Home Page' }} />
        <Stack.Screen name="HeartRate" component={HeartRate} options={{ title: 'Heart Rate Page' }} />
        <Stack.Screen name="Emergency" component={Emergency} options={{ title: 'Emergency Page' }} />
        <Stack.Screen name="PersonalData" component={PersonalData} options={{ title: 'Personal Data Page' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
