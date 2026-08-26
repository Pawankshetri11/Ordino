import { Pressable, StyleSheet, Text, View } from 'react-native'

import { authColors } from '../theme/auth.theme'
import type { AuthMode } from '../types/auth-form.types'

interface AuthModeSwitchProps {
  mode: AuthMode
  onChange: (mode: AuthMode) => void
}

const options: Array<{ label: string; value: AuthMode }> = [
  { label: 'Sign in', value: 'login' },
  { label: 'Create account', value: 'register' },
]

export function AuthModeSwitch({ mode, onChange }: AuthModeSwitchProps) {
  return (
    <View style={styles.container}>
      {options.map((option) => {
        const isActive = option.value === mode

        return (
          <Pressable
            accessibilityRole="button"
            key={option.value}
            onPress={() => onChange(option.value)}
            style={({ pressed }) => [
              styles.option,
              isActive && styles.activeOption,
              pressed && styles.pressedOption,
            ]}
          >
            <Text style={[styles.label, isActive && styles.activeLabel]}>
              {option.label}
            </Text>
          </Pressable>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F4F7',
    borderRadius: 14,
    flexDirection: 'row',
    marginBottom: 24,
    padding: 4,
  },
  option: {
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 11,
  },
  activeOption: {
    backgroundColor: authColors.surface,
    elevation: 2,
    shadowColor: '#0B1628',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  pressedOption: {
    opacity: 0.72,
  },
  label: {
    color: authColors.muted,
    fontSize: 14,
    fontWeight: '600',
  },
  activeLabel: {
    color: authColors.ink,
  },
})
