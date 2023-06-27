import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PersonalData({navigation}) {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [eyeColor, setEyeColor] = useState('');
  const [hairColor, setHairColor] = useState('');
  const [medicalConditions, setMedicalConditions] = useState('');
  const [dataVisible, setDataVisible] = useState(true);

  // Fetch the stored data from async storage when the component renders
  useEffect(() => {
    const fetchData = async () => {
      const storedName = await AsyncStorage.getItem('name');
      const storedGender = await AsyncStorage.getItem('gender');
      const storedHeight = await AsyncStorage.getItem('height');
      const storedWeight = await AsyncStorage.getItem('weight');
      const storedEyeColor = await AsyncStorage.getItem('eyeColor');
      const storedHairColor = await AsyncStorage.getItem('hairColor');
      const storedMedicalConditions = await AsyncStorage.getItem('medicalConditions');

      if (storedName !== null) setName(storedName);
      if (storedGender !== null) setGender(storedGender);
      if (storedHeight !== null) setHeight(storedHeight);
      if (storedWeight !== null) setWeight(storedWeight);
      if (storedEyeColor !== null) setEyeColor(storedEyeColor);
      if (storedHairColor !== null) setHairColor(storedHairColor);
      if (storedMedicalConditions !== null) setMedicalConditions(storedMedicalConditions);
    };

    fetchData();
  }, []);

  // Save the data to async storage
  const saveData = async () => {
    try {
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('gender', gender);
      await AsyncStorage.setItem('height', height);
      await AsyncStorage.setItem('weight', weight);
      await AsyncStorage.setItem('eyeColor', eyeColor);
      await AsyncStorage.setItem('hairColor', hairColor);
      await AsyncStorage.setItem('medicalConditions', medicalConditions);
      setDataVisible(false);
    } catch (error) {
      console.log(error);
    }
  };

  const clearData = async () => {
    try {
      await AsyncStorage.removeItem('name');
      await AsyncStorage.removeItem('gender');
      await AsyncStorage.removeItem('height');
      await AsyncStorage.removeItem('weight');
      await AsyncStorage.removeItem('eyeColor');
      await AsyncStorage.removeItem('hairColor');
      await AsyncStorage.removeItem('medicalConditions');
      
      // Update the states to clear the input fields
      setName('');
      setGender('');
      setHeight('');
      setWeight('');
      setEyeColor('');
      setHairColor('');
      setMedicalConditions('');
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = () => {
    setDataVisible(true);
  }

  return (
    <View style={styles.container}>
      { dataVisible &&
        <>
          <TextInput 
            style={styles.input}
            placeholder="Enter your name"
            onChangeText={text => setName(text)}
            value={name}
          />
          <TextInput 
            style={styles.input}
            placeholder="Enter your gender"
            onChangeText={text => setGender(text)}
            value={gender}
          />
          <TextInput 
            style={styles.input}
            placeholder="Enter your height in ft/in"
            onChangeText={text => setHeight(text)}
            value={height}
          />
          <TextInput 
            style={styles.input}
            placeholder="Enter your weight in lbs"
            onChangeText={text => setWeight(text)}
            value={weight}
          />
          <TextInput 
            style={styles.input}
            placeholder="Enter your eye color"
            onChangeText={text => setEyeColor(text)}
            value={eyeColor}
          />
          <TextInput 
            style={styles.input}
            placeholder="Enter your hair color"
            onChangeText={text => setHairColor(text)}
            value={hairColor}
          />
          <TextInput 
            style={styles.input}
            placeholder="Enter any existing medical conditions"
            onChangeText={text => setMedicalConditions(text)}
            value={medicalConditions}
          />
          <Button title="Save Data" onPress={saveData} />
          <Button title="Clear Data" onPress={clearData} />
        </>
      }
      { !dataVisible &&
        <>
          <Text>Name: {name}</Text>
          <Text>Gender: {gender}</Text>
          <Text>Height: {height}</Text>
          <Text>Weight: {weight}</Text>
          <Text>Eye Color: {eyeColor}</Text>
          <Text>Hair Color: {hairColor}</Text>
          <Text>Medical Conditions: {medicalConditions}</Text>
          <Button title="Update Data" onPress={updateData} />
        </>
      }
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
});
