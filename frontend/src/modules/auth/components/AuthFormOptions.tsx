import { Pressable, StyleSheet, Text, View } from 'react-native'

import { authColors } from '../theme/auth.theme'
import type { AuthMode } from '../types/auth-form.types'

interface AuthFormOptionsProps {
  mode: AuthMode
  onForgotPassword: () => void
  onToggleRemember: () => void
  rememberMe: boolean
}

export function AuthFormOptions({
  mode,
  onForgotPassword,
  onToggleRemember,
  rememberMe,
}: AuthFormOptionsProps) {
  if (mode === 'register') {
    return (
      <Text style={styles.terms}>
        By creating an account, you agree to the Terms and Privacy Policy.
      </Text>
    )
  }

  return (
    <View style={styles.row}>
      <Pressable
        accessibilityRole="checkbox"
        accessibilityState={{ checked: rememberMe }}
        onPress={onToggleRemember}
        style={styles.rememberButton}
      >
        <View style={[styles.checkbox, rememberMe && styles.checkedBox]}>
          {rememberMe && <Text style={styles.checkmark}>✓</Text>}
        </View>
        <Text style={styles.rememberText}>Remember me</Text>
      </Pressable>
      <Pressable accessibilityRole="button" onPress={onForgotPassword}>
        <Text style={styles.forgotText}>Forgot password?</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rememberButton: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  checkbox: {
    alignItems: 'center',
    borderColor: '#C9D1DC',
    borderRadius: 5,
    borderWidth: 1,
    height: 19,
    justifyContent: 'center',
    width: 19,
  },
  checkedBox: {
    backgroundColor: authColors.accent,
    borderColor: authColors.accent,
  },
  checkmark: {
    color: authColors.surface,
    fontSize: 12,
    fontWeight: '800',
  },
  rememberText: {
    color: authColors.muted,
    fontSize: 13,
  },
  forgotText: {
    color: authColors.accentDark,
    fontSize: 13,
    fontWeight: '700',
  },
  terms: {
    color: authColors.muted,
    fontSize: 12,
    lineHeight: 18,
  },
})
