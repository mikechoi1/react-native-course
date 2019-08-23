import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Friend1', age: 20},
        {name: 'Friend2', age: 21},
        {name: 'Friend3', age: 22},
        {name: 'Friend4', age: 23},
        {name: 'Friend5', age: 24},
        {name: 'Friend6', age: 25},
        {name: 'Friend7', age: 26},
        {name: 'Friend8', age: 27},
        {name: 'Friend9', age: 28}
    ];
    return (
        <FlatList
            keyExtractor={(friend) => friend.name}
            data={friends}
            //element === { item: { name: 'Friend1' }, index: 0}, so use destructuring to just get item
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;