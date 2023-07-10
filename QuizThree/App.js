import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './components/Profile';
import BMI from './components/BMI';
import Age from './components/Age';
import { UserDetailsProvider } from './UserDetailsContext';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <UserDetailsProvider>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Profile" component={Profile} />
                    <Tab.Screen name="Age" component={Age} />
                    <Tab.Screen name="BMI" component={BMI} />
                </Tab.Navigator>
            </NavigationContainer>
        </UserDetailsProvider>
    );
}