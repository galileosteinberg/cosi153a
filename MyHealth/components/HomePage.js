import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default function HomePage({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MyHealth!</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Personal Information Page"
          onPress={() => navigation.navigate('PersonalData')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Emergency Page"
          onPress={() => navigation.navigate('Emergency')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Heart Rate Page"
          onPress={() => navigation.navigate('HeartRate')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%', // adjust this value as per your need 
    marginVertical: 10,
  },
});
