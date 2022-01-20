import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';
import { useTranslation } from 'react-i18next';
import Router from './Router';
import useStore from '../store/useStore';

export default function App() {
  const { t, i18n } = useTranslation();
  const language = useStore((state) => state.language);


  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <NavigationContainer ref={navigationRef}>
      <Router />
    </NavigationContainer>
  );
}