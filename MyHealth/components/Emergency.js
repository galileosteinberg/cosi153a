import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import call from 'react-native-phone-call';

export default function EmergencyPage({navigation}) {
  const makeEmergencyCall = () => {
    const args = {
      number: '8572757307',
      prompt: false,
    };
    call(args).catch(console.error);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Are you in need of immediate assistance?</Text>
      <Button title="YES" onPress={makeEmergencyCall} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
  },
});