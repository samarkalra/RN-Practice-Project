import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {appStyles} from '../../../core/constants/appStyles';
import {useAppDispatch, useAppSelector} from '../../../core/hooks/storeHooks';
import {
  decrement,
  decrementAsync,
  increment,
  incrementAsync,
} from '../../../state/reducers/counterSlice';
import {styles} from './style';

const Counter = () => {
  const counter = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  const onIncrementAsync = () => {
    dispatch(incrementAsync());
  };

  const onDecrementAsync = () => {
    dispatch(decrementAsync());
  };

  return (
    <SafeAreaView style={appStyles.screen}>
      <View
        style={{
          ...appStyles.container,
          padding: 24,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <Text style={{fontSize: Platform.OS === 'android' ? 100 : 126}}>
            {counter}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.buttonLeft]}
            onPress={onDecrement}>
            <Text>decrement</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onIncrement}>
            <Text>increment</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.buttonLeft]}
            onPress={onDecrementAsync}>
            <Text>decrement async</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onIncrementAsync}>
            <Text>increment async</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export {Counter};
