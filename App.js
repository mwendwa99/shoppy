// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Alert, View, StatusBar, SafeAreaView, Button, Platform } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Card from './app/components/Card';
import ListingDetailScreen from './app/screens/ListingDetailScreen';

export default function App() {

  const { landscape } = useDeviceOrientation();

  return (
    // <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      <ListingDetailScreen />
    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
