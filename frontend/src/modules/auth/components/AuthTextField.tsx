import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

import { authColors } from '../theme/auth.theme'

interface AuthTextFieldProps {
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
  error?: string
  icon: string
  keyboardType?: 'default' | 'email-address'
  label: string
  onChangeText: (value: string) => void
  onToggleSecure?: () => void
  placeholder: string
  secureTextEntry?: boolean
  value: string
}

export function AuthTextField({
  autoCapitalize = 'none',
  error,
  icon,
  keyboardType = 'default',
  label,
  onChangeText,
  onToggleSecure,
  placeholder,
  secureTextEntry,
  value,
}: AuthTextFieldProps) {
  return (
    <View style={styles.group}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputRow, error && styles.errorInput]}>
        <Text style={styles.icon}>{icon}</Text>
        <TextInput
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#98A2B3"
          secureTextEntry={secureTextEntry}
          selectionColor={authColors.accent}
          style={styles.input}
          value={value}
        />
        {onToggleSecure && (
          <Pressable
            accessibilityRole="button"
            hitSlop={8}
            onPress={onToggleSecure}
          >
            <Text style={styles.showButton}>
              {secureTextEntry ? 'Show' : 'Hide'}
            </Text>
          </Pressable>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  group: {
    gap: 7,
  },
  label: {
    color: authColors.ink,
    fontSize: 13,
    fontWeight: '700',
  },
  inputRow: {
    alignItems: 'center',
    backgroundColor: '#FBFCFD',
    borderColor: authColors.border,
    borderRadius: 13,
    borderWidth: 1,
    flexDirection: 'row',
    minHeight: 54,
    paddingHorizontal: 15,
  },
  errorInput: {
    backgroundColor: authColors.dangerSoft,
    borderColor: '#E6A1A1',
  },
  icon: {
    color: '#98A2B3',
    fontSize: 14,
    fontWeight: '700',
    marginRight: 11,
    minWidth: 18,
    textAlign: 'center',
  },
  input: {
    color: authColors.ink,
    flex: 1,
    fontSize: 15,
    paddingVertical: 14,
  },
  showButton: {
    color: authColors.accentDark,
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 10,
  },
  errorText: {
    color: authColors.danger,
    fontSize: 12,
  },
})
