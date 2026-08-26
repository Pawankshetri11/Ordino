import { StyleSheet } from 'react-native'

import { authColors } from '../theme/auth.theme'

export const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: authColors.page,
    flex: 1,
  },
  keyboardArea: {
    flex: 1,
  },
  page: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  desktopPage: {
    padding: 28,
  },
  mobilePage: {
    backgroundColor: authColors.surface,
  },
  shell: {
    backgroundColor: authColors.surface,
    overflow: 'hidden',
    width: '100%',
  },
  desktopShell: {
    borderRadius: 32,
    elevation: 12,
    flexDirection: 'row',
    maxWidth: 1160,
    minHeight: 720,
    shadowColor: '#0B1628',
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.14,
    shadowRadius: 36,
  },
  mobileShell: {
    flexGrow: 1,
    minHeight: '100%',
  },
  formPane: {
    alignSelf: 'center',
    justifyContent: 'center',
    maxWidth: 540,
    paddingHorizontal: 24,
    paddingVertical: 36,
    width: '100%',
  },
  desktopFormPane: {
    flex: 1,
    maxWidth: undefined,
    paddingHorizontal: 64,
    paddingVertical: 52,
  },
})
