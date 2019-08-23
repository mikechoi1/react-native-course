import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ComponentScreen = () => {
    const second = <Text style={styles.subheaderTextStyle}>This is the components screen</Text>;
    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen</Text>
            {second}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subheaderTextStyle: {
        fontSize: 45
    }
});

export default ComponentScreen;