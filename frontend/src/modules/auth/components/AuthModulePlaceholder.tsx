import { StyleSheet, Text, View } from 'react-native'

export function AuthModulePlaceholder() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Authentication</Text>
      <Text style={styles.message}>
        Login and registration UI will be implemented in this module.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  message: {
    color: '#475569',
    fontSize: 16,
  },
})
