import React, { useState } from 'react';
import { Text, TextInput, Pressable, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useRouter } from 'expo-router';
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  arrayUnion,
} from 'firebase/firestore';
import { db } from '../firebaseConfig.js';

export default function Join() {
  const { userId } = useLocalSearchParams();
  const [gamecode, setGamecode] = useState('');
  const router = useRouter();

  async function onJoinButtonPress() {
    console.log('going to search for game code ', gamecode);
    //
    // write a function to add your userId to the appropriate game in the games collection
    //
    const q = query(collection(db, 'games'), where('joinCode', '==', gamecode));
    const qs = await getDocs(q);
    var gameId = '';

    qs.forEach(async (document) => {
      // there should really only be one game with this joincode.  maybe check?
      gameId = document.id;
      console.log('gameId is ', document.id);
      const docRef = doc(db, 'games', gameId);

      await updateDoc(docRef, {
        users: arrayUnion(userId),
      });
    });

    router.push({
      pathname: '/game',
      params: { gameId: gameId, userId: userId },
    });
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Join a game!!!</Text>
      <Text>Your userId is {userId}.</Text>
      <Text> Enter your game code: </Text>
      <TextInput
        style={{
          borderWidth: 2,
          borderRadius: 10,
          width: '50%',
          height: 40,
          margin: 10,
          textAlign: 'center',
        }}
        value={gamecode}
        onChangeText={setGamecode}
      />
      <Pressable
        onPress={onJoinButtonPress}
        style={{
          backgroundColor: 'lightblue',
          padding: 10,
          width: '20%',
          alignItems: 'center',
        }}
      >
        <Text>Join</Text>
      </Pressable>
    </View>
  );
}
