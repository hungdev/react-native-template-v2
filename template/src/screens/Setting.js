import React from 'react';
import { View, Text, Button } from 'react-native';
import useStore from '../store/useStore';

export default function Setting({ navigation }) {
  const language = useStore((state) => state.language);
  const setLanguage = useStore((state) => state.setLanguage);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>Language: {language}</Text>

      <Button
        title="Change to VN"
        onPress={setLanguage('vn')}
      />
      <Button
        title="Change to EN"
        onPress={setLanguage('en')}
      />

      <Button
        title="Go to Setting... again"
        onPress={() => navigation.push('Setting')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
