import { StatusBar } from 'expo-status-bar'
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
  useWindowDimensions,
} from 'react-native'

import { AuthForm } from '../components/AuthForm'
import { AuthHero } from '../components/AuthHero'
import { styles } from './auth-screen.styles'

export function AuthScreen() {
  const { width } = useWindowDimensions()
  const isDesktop = width >= 960

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style={isDesktop ? 'light' : 'dark'} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardArea}
      >
        <ScrollView
          contentContainerStyle={[
            styles.page,
            isDesktop ? styles.desktopPage : styles.mobilePage,
          ]}
          keyboardShouldPersistTaps="handled"
        >
          <View
            style={[styles.shell, isDesktop ? styles.desktopShell : styles.mobileShell]}
          >
            {isDesktop && <AuthHero />}
            <View style={[styles.formPane, isDesktop && styles.desktopFormPane]}>
              <AuthForm showBrand={!isDesktop} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
