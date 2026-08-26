import { StyleSheet, Text, View } from 'react-native'

import { authColors } from '../theme/auth.theme'
import { BrandMark } from './BrandMark'

const benefits = [
  'One workspace for the whole restaurant',
  'Built for web, Android, and iOS',
  'Simple today, ready to scale tomorrow',
]

export function AuthHero() {
  return (
    <View style={styles.container}>
      <View style={styles.glowLarge} />
      <View style={styles.glowSmall} />
      <BrandMark onDark />

      <View style={styles.content}>
        <Text style={styles.eyebrow}>WELCOME TO ORDINO</Text>
        <Text style={styles.title}>Every table.{`\n`}One simple flow.</Text>
        <Text style={styles.description}>
          Give your team a calmer way to manage the busy moments that matter.
        </Text>

        <View style={styles.benefits}>
          {benefits.map((benefit) => (
            <View key={benefit} style={styles.benefitRow}>
              <View style={styles.check}>
                <Text style={styles.checkText}>✓</Text>
              </View>
              <Text style={styles.benefitText}>{benefit}</Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.footer}>Built for modern restaurant teams.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: authColors.hero,
    flex: 0.88,
    justifyContent: 'space-between',
    overflow: 'hidden',
    padding: 52,
  },
  glowLarge: {
    backgroundColor: '#173A61',
    borderRadius: 190,
    height: 380,
    position: 'absolute',
    right: -175,
    top: -95,
    width: 380,
  },
  glowSmall: {
    backgroundColor: authColors.accent,
    borderRadius: 65,
    bottom: 62,
    height: 130,
    opacity: 0.12,
    position: 'absolute',
    right: 48,
    width: 130,
  },
  content: {
    maxWidth: 390,
  },
  eyebrow: {
    color: '#FFB37A',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 18,
  },
  title: {
    color: authColors.surface,
    fontSize: 46,
    fontWeight: '800',
    letterSpacing: -1.3,
    lineHeight: 52,
  },
  description: {
    color: authColors.heroMuted,
    fontSize: 17,
    lineHeight: 27,
    marginTop: 22,
  },
  benefits: {
    gap: 15,
    marginTop: 36,
  },
  benefitRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  check: {
    alignItems: 'center',
    backgroundColor: 'rgba(249, 115, 22, 0.18)',
    borderRadius: 10,
    height: 28,
    justifyContent: 'center',
    width: 28,
  },
  checkText: {
    color: '#FF9B52',
    fontSize: 15,
    fontWeight: '800',
  },
  benefitText: {
    color: '#E8EEF6',
    fontSize: 15,
  },
  footer: {
    color: '#8294AB',
    fontSize: 12,
  },
})
