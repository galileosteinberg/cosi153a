import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';




const App = () => {
  
  const d = (x,y,z) => Math.sqrt(x*x+y*y+z*z)
  const [result,setResult] = useState("")
  
  const x = 1
  const y = 2
  const z = 2
  
  const updateResult = () => {
    setResult(d(x,y,z))
  }
  

  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Distance of (x,y,z) from (0,0,0)</Text>
      <Text style = {styles.body}> 
        Write the code for this app which calculates {'\n'} 
        d = Math.sqrt(x*x+y*y+z*z) {'\n'}
        {x} {'\n'}
        {y} {'\n'}
        {z} {'\n'}
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => updateResult()}><Text style={styles.buttonText} >CALCULATE DISTANCE</Text> </TouchableOpacity>
      <Text style = {styles.body}> 
        distance to ({x},{y},{z}) is d = {result}
      </Text>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    marginLeft: 20,
  },
  title: {
    textAlign: 'left',
    textAlignVertical: 'top',
    fontWeight: 'bold',
    fontSize: 50,
  },
  body: {
    textAlign: 'left',
    textAlignVertical: 'top',
    fontSize: 30,
  },
  button: {
    backgroundColor: '#1F96F3',
    width: 375,
    height: 70, 
    borderRadius: 3,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: '500',
  }
});

export default App;
