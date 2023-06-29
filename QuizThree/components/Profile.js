import React, { useContext } from 'react';
import { Button, TextInput, View } from 'react-native';


export default function Profile() {
    const [userDetails, setUserDetails] = useState({
        name: '',
        age: '',
        weight: '',
        height: ''
      });

  return (
    <View>
      <TextInput placeholder="Name" onChangeText={(name) => setUserDetails({ ...userDetails, name })} />
      <TextInput placeholder="Age" keyboardType='numeric' onChangeText={(age) => setUserDetails({ ...userDetails, age })} />
      <TextInput placeholder="Weight" keyboardType='numeric' onChangeText={(weight) => setUserDetails({ ...userDetails, weight })} />
      <TextInput placeholder="Height" keyboardType='numeric' onChangeText={(height) => setUserDetails({ ...userDetails, height })} />
    </View>
  );
}