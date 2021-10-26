import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons'

import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import colors from '../config/colors';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: colors.primary
        }
    }} >
        <Tab.Screen
            options={{
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name="shopping" color={color} size={size} />,
                headerShown: true,
            }}
            name="Shop" component={FeedNavigator} />
        <Tab.Screen
            options={{
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name="plus-box" color={color} size={size} />
            }}
            name="New Listing" component={ListingEditScreen} />
        <Tab.Screen
            options={{
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name="account-box" color={color} size={size} />
            }}
            name="Account" component={AccountNavigator} />
    </Tab.Navigator>
)

export default AppNavigator;