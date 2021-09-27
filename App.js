// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailScreen from './app/screens/ListingDetailScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

const categories = [
  { label: "furniture", value: 1 },
  { label: "clothing", value: 2 },
  { label: "phone", value: 3 },
]

export default function App() {
  const [category, setCategory] = useState(categories[0])

  return (
    <Screen style={styles.container}>
      <WelcomeScreen />
      {/* <LoginScreen /> */}
      {/* <ListingDetailScreen /> */}
      {/* <AccountScreen /> */}
      {/* <ListingEditScreen /> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
