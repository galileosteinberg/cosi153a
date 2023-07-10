import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';




const App = () => {
  
  const d = (x,y,z) => Math.sqrt(x*x+y*y+z*z)
  const [x,setX] = useState("")
  const [y,setY] = useState("")
  const [z,setZ] = useState("")
  const [result,setResult] = useState("")
  
  const updateResult = () => {
    setResult(d(x,y,z))
  }
  

  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Distance of (x,y,z) from (0,0,0)</Text>
      <Text style = {styles.body}> 
        Write the code for this app which calculates {'\n'} 
        d = Math.sqrt(x*x+y*y+z*z) {'\n'}
        </Text>
        <TextInput style = {styles.body} placeholder="Input x" onChangeText={text => setX(text)} />
        {'\n'}
        <TextInput style = {styles.body} placeholder="Input y" onChangeText={text => setY(text)} />
        {'\n'}
        <TextInput style = {styles.body} placeholder="Input z" onChangeText={text => setZ(text)} />
        {'\n'}
      
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
