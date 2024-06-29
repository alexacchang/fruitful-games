import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { addDoc, collection } from 'firebase/firestore';

import { db } from '../firebaseConfig';
import Button from '../components/Button';

export default function Index() {
  const [name, setName] = useState('');
  const router = useRouter();

  async function enterName() {
    const docRef = await addDoc(collection(db, 'users'), {
      name: name,
    });
    router.push({
      pathname: '/join',
      params: { userId: docRef.id },
    });
  }

  return (
    <View style={styles.container}>
      <Text>Please enter your name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button onPress={enterName} title="Start" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
