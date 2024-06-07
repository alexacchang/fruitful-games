import React from 'react';
import {
  Pressable,
  type PressableProps,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';

export type Props = PressableProps & {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
};

export default function Button({ onPress, title }: Props) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
