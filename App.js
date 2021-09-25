// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailScreen from './app/screens/ListingDetailScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';

export default function App() {

  return (
    <Screen>
      <Icon
        name="email"
        size={50}
      />
    </Screen>
    // <View style={styles.container}>
    //  <WelcomeScreen /> 
    //  <ViewImageScreen /> 
    //  <ListingDetailScreen /> 
    //  <MessagesScreen /> 
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
