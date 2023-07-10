import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import call from 'react-native-phone-call';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EmergencyPage({navigation}) {
  const [emergencyContact, setEmergencyContact] = useState('');

  useEffect(() => {
    const fetchContact = async () => {
      const storedEmergencyContact = await AsyncStorage.getItem('emergencyContact');
      if (storedEmergencyContact !== null) setEmergencyContact(storedEmergencyContact);
    };
    fetchContact();
  }, 
  []);

  const call_911 = () => {
    const args = {
      number: '1234567890',
      prompt: false,
    };
    call(args).catch(console.error);
  };
  const makeEmergencyCall = () => {
    const args = {
      number: emergencyContact,
      prompt: false,
    };
    call(args).catch(console.error);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Are you in need of immediate assistance?</Text>
      <Button title="Call 911" onPress={call_911} />
      <Button title="Call Emergency Contact" onPress={makeEmergencyCall} />
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