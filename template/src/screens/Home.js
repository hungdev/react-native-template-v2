import React from 'react';
import { View, Text, Button } from 'react-native';
import useStore from 'store/useStore';
import { initReactI18next, useTranslation } from 'react-i18next';


export default function Home({ navigation }) {
  const { t, i18n } = useTranslation();
  const language = useStore((state) => state.language);
  const setLanguage = useStore((state) => state.setLanguage);

  const fishes = useStore((state) => state.fishes);
  const eatFish = useStore((state) => state.eatFish);
  const repopulate = useStore((state) => state.repopulate);
  const honey = useStore((state) => state.honeySlice.honey);


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>{t('hello')}</Text>
      <Text>Language: {language}</Text>

      <Text>Fishes : {fishes}</Text>
      <Text>honey : {honey}</Text>



      <Button
        title="Change to VN"
        onPress={setLanguage('vi')}
      />
      <Button
        title="Change to EN"
        onPress={setLanguage('en')}
      />

      <Button
        title="Eat"
        onPress={eatFish}
      />
      <Button
        title="Repopulate"
        onPress={repopulate}
      />
      <Button
        title="Go to Setting"
        onPress={() => navigation.navigate('Setting')}
      />
    </View>
  );
}
