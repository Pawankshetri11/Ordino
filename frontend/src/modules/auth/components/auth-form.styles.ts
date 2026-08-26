import { StyleSheet } from 'react-native'

import { authColors } from '../theme/auth.theme'

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    maxWidth: 440,
    width: '100%',
  },
  mobileBrand: {
    marginBottom: 44,
  },
  eyebrow: {
    color: authColors.accentDark,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.7,
    marginBottom: 10,
  },
  title: {
    color: authColors.ink,
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: -0.7,
  },
  subtitle: {
    color: authColors.muted,
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 26,
    marginTop: 9,
  },
  fields: {
    gap: 17,
    marginBottom: 18,
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: authColors.accent,
    borderRadius: 13,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
    minHeight: 55,
    paddingHorizontal: 20,
    shadowColor: authColors.accentDark,
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.22,
    shadowRadius: 12,
  },
  pressedButton: {
    opacity: 0.82,
    transform: [{ scale: 0.995 }],
  },
  submitText: {
    color: authColors.surface,
    fontSize: 15,
    fontWeight: '800',
  },
  arrow: {
    color: authColors.surface,
    fontSize: 21,
    marginLeft: 10,
    marginTop: -1,
  },
  notice: {
    backgroundColor: authColors.successSoft,
    borderColor: '#B9E0C9',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 16,
    padding: 12,
  },
  noticeText: {
    color: authColors.success,
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
  },
  helpText: {
    color: authColors.muted,
    fontSize: 12,
    marginTop: 24,
    textAlign: 'center',
  },
  helpLink: {
    color: authColors.ink,
    fontWeight: '700',
  },
})
