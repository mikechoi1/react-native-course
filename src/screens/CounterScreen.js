import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const reducer = (state, action) => {
    switch(action.type) {
        case 'increase_counter':
            return { ...state, counter: state.counter + action.payload};
        case 'decrease_counter':
            return { ...state, counter: state.counter - action.payload};
        default:
            return state;
    }
}

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, {counter : 0})

    return (
        <View>
            <Button title="Increase" onPress={() => {
                dispatch({type: 'increase_counter', payload: 1});
            }}/>
            <Button title="Decrease" onPress={() => {
                dispatch({type: 'decrease_counter', payload: 1});
            }}/>
            <Text>Current Count: {state.counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;