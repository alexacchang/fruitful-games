import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { db } from '../firebaseConfig.js';
import { useRouter } from 'expo-router';

export default function Index() {
  const [name, setName] = useState('');
  const router = useRouter();

  async function onNextButtonPress() {
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
      <Text>Enter name:</Text>
      <TextInput
        style={{
          borderWidth: 2,
          borderRadius: 10,
          width: '50%',
          height: 40,
          margin: 10,
          textAlign: 'center',
        }}
        value={name}
        onChangeText={setName}
      />
      <Pressable
        onPress={onNextButtonPress}
        style={{
          backgroundColor: 'lightblue',
          padding: 10,
          width: '20%',
          alignItems: 'center',
        }}
      >
        <Text>Next</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
