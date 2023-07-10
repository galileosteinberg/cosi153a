import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { UserDetailsContext } from '../UserDetailsContext';

export default function BMI() {
    const [userDetails] = useContext(UserDetailsContext);
    const { weight, height } = userDetails;

    const bmi = (703*(weight / ((height) ** 2))).toFixed(2);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>BMI Calculator</Text>
            <Text>Height: {height} </Text>
            <Text>Weight: {weight} </Text>
            <Text>BMI: {bmi}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        fontSize: 20,
        marginBottom: 20,
    },
});
