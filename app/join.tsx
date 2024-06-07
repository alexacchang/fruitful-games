import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { addDoc, collection, doc, getDoc } from 'firebase/firestore';

import { db } from '../firebaseConfig.js';

export default function Index() {
  // async function joinGame() {
  //     const gameRef = doc(db, 'games', )
  //     await updateDoc(gameRef, {
  //         users: arrayUnion(userId);
  //     })
  // }

  function createGame() {
    addDoc(collection(db, 'games'), {
      joinCode: generateRandomString(),
      status: 'NOT STARTED',
    });
  }

  function generateRandomString() {
    return Math.random().toString(20).substring(2, 7).toUpperCase();
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Join a game!</Text>
      <Text>Enter a game code:</Text>
      <View style={styles.joinView}>
        <TextInput style={styles.input} />
        <Pressable style={styles.button} onPress={createGame}>
          <Text style={styles.buttonText}>Join</Text>
        </Pressable>
      </View>
      <Text style={{ marginVertical: 10 }}>Or start a new game room!</Text>
      <Pressable style={styles.button} onPress={createGame}>
        <Text style={styles.buttonText}>Create Room</Text>
      </Pressable>
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
    flex: 1,
  },
  joinView: {
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});
