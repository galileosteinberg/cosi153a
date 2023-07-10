import React, { useContext, useState } from 'react';
import { Button, TextInput, View, Text, StyleSheet } from 'react-native';
import { UserDetailsContext } from '../UserDetailsContext';

export default function Profile() {
    const [userDetails, setUserDetails] = useContext(UserDetailsContext);
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputsContainer}>
                <Text style={styles.globalVars}>currentValue = {JSON.stringify(userDetails)}</Text>

                <View style={styles.inputRow}>
                    <Text>Name:</Text>
                    <TextInput 
                        style={{...styles.input, backgroundColor: 'green'}} 
                        onChangeText={(name) => setUserDetails({ ...userDetails, name })}
                        value={userDetails.name}
                    />
                </View>

                <View style={styles.inputRow}>
                    <Text>Age:</Text>
                    <TextInput 
                        style={{...styles.input, backgroundColor: 'lightblue'}} 
                        keyboardType='numeric' 
                        onChangeText={(age) => setUserDetails({ ...userDetails, age })}
                        value={userDetails.age}
                    />
                </View>

                <View style={styles.inputRow}>
                    <Text>Weight:</Text>
                    <TextInput 
                        style={{...styles.input, backgroundColor: 'lightpink'}} 
                        keyboardType='numeric' 
                        onChangeText={(weight) => setUserDetails({ ...userDetails, weight })}
                        value={userDetails.weight}
                    />
                </View>

                <View style={styles.inputRow}>
                    <Text>Height:</Text>
                    <TextInput 
                        style={{...styles.input, backgroundColor: 'turquoise'}} 
                        keyboardType='numeric' 
                        onChangeText={(height) => setUserDetails({ ...userDetails, height })}
                        value={userDetails.height}
                    />
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Save Profile" onPress={handleSave} />
                {saved}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    inputsContainer: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    globalVars: {
        marginBottom: 20,
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        width: '70%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        marginBottom: 10,
    },
});
