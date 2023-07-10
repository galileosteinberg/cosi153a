import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { UserDetailsContext } from '../UserDetailsContext';

export default function Age() {
    const [userDetails] = useContext(UserDetailsContext);
    const { age } = userDetails;

    const ageInWeeks = (age * 52).toFixed(0);
    const ageInDays = (age * 365).toFixed(0);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Age Calculator</Text>
            <Text>Age in years: {age}</Text>
            <Text>Age in weeks: {ageInWeeks}</Text>
            <Text>Age in days: {ageInDays}</Text>
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
