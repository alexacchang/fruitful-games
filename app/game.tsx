import React, { useState, useEffect } from 'react';
import { Text, Pressable, View, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useRouter } from 'expo-router';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebaseConfig.js';

// Waiting Room
//
export default function Room() {
  const { userId, gameId } = useLocalSearchParams();
  const [users, setUsers] = useState('');
  const router = useRouter();

  //
  // write a function to subscribe to any changes in the document for this game
  //
  useEffect(() => {
    const gameIdThatMUSTBESTRINGGGG = typeof gameId === 'string' ? gameId : '';
    const docRef = doc(db, 'games', gameIdThatMUSTBESTRINGGGG);
    const unsubscribe = onSnapshot(docRef, (document) => {
      const docData = document.data();
      if (docData) {
        console.log("current users who've joined: ", docData.users);
        setUsers(docData.users);
      }
    });

    return () => unsubscribe();
  }, []);

  async function onStartGameButtonPress() {
    //
    // write a function to start the game once all your friends have joined
    //
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Who has joined so far:</Text>
      <FlatList data={users} renderItem={({ item }) => <Text>{item}</Text>} />
      <Text>Your userId is {userId}.</Text>
      <Text>Your gameId is {gameId}.</Text>

      <Pressable
        onPress={onStartGameButtonPress}
        style={{
          backgroundColor: 'lightblue',
          padding: 10,
          width: '20%',
          alignItems: 'center',
        }}
      >
        <Text>Start Game</Text>
      </Pressable>
    </View>
  );
}
