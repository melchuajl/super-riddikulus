import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import styles from './src/styles/Stylesheet';
import SpellTypes from './src/components/SpellTypes';

export default function App() {
  return (
    <View style={styles.container}>
      <SpellTypes />
      <StatusBar style="auto" />
    </View>
  );
}
