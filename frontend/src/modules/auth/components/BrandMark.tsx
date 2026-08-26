import { StyleSheet, Text, View } from 'react-native'

import { authColors } from '../theme/auth.theme'

interface BrandMarkProps {
  onDark?: boolean
}

export function BrandMark({ onDark = false }: BrandMarkProps) {
  return (
    <View style={styles.container}>
      <View style={styles.symbol}>
        <Text style={styles.symbolText}>O</Text>
      </View>
      <View>
        <Text style={[styles.name, onDark && styles.lightText]}>Ordino</Text>
        <Text style={[styles.tagline, onDark && styles.mutedLightText]}>
          Restaurant workspace
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  symbol: {
    alignItems: 'center',
    backgroundColor: authColors.accent,
    borderRadius: 13,
    height: 46,
    justifyContent: 'center',
    transform: [{ rotate: '-6deg' }],
    width: 46,
  },
  symbolText: {
    color: authColors.surface,
    fontSize: 25,
    fontWeight: '800',
    transform: [{ rotate: '6deg' }],
  },
  name: {
    color: authColors.ink,
    fontSize: 21,
    fontWeight: '800',
    letterSpacing: 0.2,
  },
  tagline: {
    color: authColors.muted,
    fontSize: 11,
    marginTop: 1,
    textTransform: 'uppercase',
  },
  lightText: {
    color: authColors.surface,
  },
  mutedLightText: {
    color: authColors.heroMuted,
  },
})
