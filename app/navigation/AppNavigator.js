import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons'

import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen
            options={{
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name="home" color={color} size={size} />
            }}
            name="Feed" component={FeedNavigator} />
        <Tab.Screen name="Add" component={ListingEditScreen} />
        <Tab.Screen name="Account" component={AccountNavigator} />
    </Tab.Navigator>
)

export default AppNavigator;