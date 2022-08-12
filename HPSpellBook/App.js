import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import SpellTypes from './src/components/SpellTypes';

export default function App() {
  return (
    <View style={styles.container}>
      <SpellTypes />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
