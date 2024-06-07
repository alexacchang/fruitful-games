import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { addDoc, collection, doc, getDoc } from 'firebase/firestore';

import { db } from '../firebaseConfig.js';
import Button from '../components/Button';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Please enter your name</Text>
      <TextInput style={styles.input} />
      <Button onPress={() => console.log('hi')} title={'hi'} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 15,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    textAlign: 'center',
    width: '50%',
  },
});
