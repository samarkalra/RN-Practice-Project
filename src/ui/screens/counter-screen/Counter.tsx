import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {appStyles} from '../../../core/constants/appStyles';
import {styles} from './style';

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const incrementCounter = () => {
    setCounter(currentCounter => currentCounter + 1);
  };

  const decrementCounter = () => {
    setCounter(currentCounter => currentCounter - 1);
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
            onPress={incrementCounter}>
            <Text>increment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={decrementCounter}>
            <Text>decrement</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.buttonLeft]}>
            <Text>increment async</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>decrement async</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export {Counter};
