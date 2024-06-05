import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import StackNavigation from './StackNavigation';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StackNavigation/>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
