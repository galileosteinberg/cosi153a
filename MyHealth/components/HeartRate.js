import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import timer from 'react-native-timer';

export default function HeartRatePage({navigation}) {
  const [heartbeatCount, setHeartbeatCount] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);
  const [beatsPerMinute, setBeatsPerMinute] = useState(0);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (timerStarted) {
      timer.setInterval('countdown', () => {
        setCountdown((countdown) => countdown - 1);
      }, 1000);
      
      timer.setTimeout('heartbeatTimer', () => {
        setTimerStarted(false);
        timer.clearInterval('countdown');
        calculateBeatsPerMinute();
        Alert.alert("Timer finished!", "You can now calculate your beats per minute.");
      }, 10000); // 10 seconds timer
    }

    return () => {
      timer.clearTimeout('heartbeatTimer');
      timer.clearInterval('countdown');
    };
  }, [timerStarted]);

  const calculateBeatsPerMinute = () => {
    setBeatsPerMinute(heartbeatCount * 6);
  };

  const startCounting = () => {
    setTimerStarted(true);
    setCountdown(10);
    setBeatsPerMinute(0);
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter heartbeat count"
        onChangeText={text => setHeartbeatCount(Number(text))}
      />
       <Button title="Start counting heart rate" onPress={startCounting} />
      {!timerStarted && heartbeatCount > 0 && (
        <Button title="Calculate Beats Per Minute" onPress={calculateBeatsPerMinute} />
      )}
      {timerStarted && (
        <Text style={styles.countdown}>Remaining Time: {countdown}</Text>
      )}
      {beatsPerMinute > 0 && (
        <Text style={styles.result}>Beats Per Minute: {beatsPerMinute}</Text>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  countdown: {
    marginTop: 16,
    fontSize: 18,
    textAlign: 'center',
    color: 'blue',
  },
  result: {
    marginTop: 16,
    fontSize: 18,
    textAlign: 'center',
  },
});
