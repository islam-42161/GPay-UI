import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Home from './screens/Home';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar style='light'/>
      <Home/>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
