import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurant QR SaaS</Text>
      <Text style={styles.message}>Frontend is working successfully.</Text>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    color: '#1f2937',
    fontSize: 40,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
  },
  message: {
    color: '#475569',
    fontSize: 18,
    textAlign: 'center',
  },
});
