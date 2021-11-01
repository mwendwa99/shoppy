import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailScreen from '../screens/ListingDetailScreen';
import colors from '../config/colors';

const Stack = createStackNavigator();

const FeedNavigator = () => (

    <Stack.Navigator
        screenOptions={{
            presentation: 'card',
            headerShown: false
        }}

    >
        <Stack.Screen name="Listings" component={ListingsScreen} />
        <Stack.Screen name="ListingDetails" component={ListingDetailScreen} />
    </Stack.Navigator>
);

export default FeedNavigator