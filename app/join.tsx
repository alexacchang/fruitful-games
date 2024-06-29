import React from 'react';
import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Join() {
  const { userId } = useLocalSearchParams();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Join a game!</Text>
      {userId && <Text>User ID: {userId}</Text>}
    </View>
  );
}
