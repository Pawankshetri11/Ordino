import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native'

import { styles } from './auth-screen.styles'
import { colors } from '../../../theme/tokens'

const authIllustration = require('../../../../assets/auth-restaurant-manager-v2.png')
const ordinoLogoDark = require('../../../../assets/brand/ordino-logo-dark.png')
const ordinoLogo = require('../../../../assets/brand/ordino-logo-white.png')

const featureChips = ['QR menu', 'Kitchen live', 'POS billing']

const serviceFlowItems = [
  {
    image: require('../../../../assets/flow-scan-qr.png'),
    label: 'Scan QR',
  },
  {
    image: require('../../../../assets/flow-kitchen.png'),
    label: 'Kitchen',
  },
  {
    image: require('../../../../assets/flow-bill.png'),
    label: 'Bill',
  },
]

interface AuthFormValues {
  email: string
  password: string
}

type AuthFormField = keyof AuthFormValues
type AuthFormErrors = Partial<Record<AuthFormField, string>>

const emptyValues: AuthFormValues = {
  email: '',
  password: '',
}

function validateAuthForm(values: AuthFormValues): AuthFormErrors {
  const errors: AuthFormErrors = {}
  const email = values.email.trim()

  if (!email) {
    errors.email = 'Email is required'
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = 'Enter a valid email'
  }

  if (!values.password) {
    errors.password = 'Password is required'
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters'
  }

  return errors
}

function useAuthForm() {
  const [values, setValues] = useState(emptyValues)
  const [errors, setErrors] = useState<AuthFormErrors>({})
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const [notice, setNotice] = useState<string | null>(null)

  const updateField = (field: AuthFormField, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setNotice(null)
  }

  const submit = () => {
    const nextErrors = validateAuthForm(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setNotice('Login form is ready. Backend API wiring comes next.')
    }
  }

  return {
    errors,
    notice,
    rememberMe,
    setRememberMe,
    setShowPassword,
    showPassword,
    submit,
    updateField,
    values,
  }
}

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

function AuthTextField({
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
    <View style={styles.textFieldGroup}>
      <Text style={styles.textFieldLabel}>{label}</Text>
      <View style={[styles.textFieldRow, error && styles.textFieldRowError]}>
        <View style={styles.textFieldIconWrap}>
          <Text style={styles.textFieldIcon}>{icon}</Text>
        </View>
        <TextInput
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.muted}
          secureTextEntry={secureTextEntry}
          selectionColor={colors.brand}
          style={styles.textFieldInput}
          value={value}
        />
        {onToggleSecure && (
          <Pressable
            accessibilityRole="button"
            hitSlop={8}
            onPress={onToggleSecure}
          >
            <Text style={styles.textFieldShowButton}>
              {secureTextEntry ? 'Show' : 'Hide'}
            </Text>
          </Pressable>
        )}
      </View>
      {error && <Text style={styles.textFieldError}>{error}</Text>}
    </View>
  )
}

function BrandMark() {
  return (
    <Image
      accessibilityLabel="Ordino restaurant workspace logo"
      resizeMode="contain"
      source={ordinoLogo}
      style={styles.brandLogo}
    />
  )
}

interface VisualPaneProps {
  illustrationHeight: number
  isDesktop: boolean
}

function VisualPane({ illustrationHeight, isDesktop }: VisualPaneProps) {
  return (
    <View style={[styles.visualPane, isDesktop ? styles.visualDesktop : styles.visualMobile]}>
      <View style={styles.orangePanel} />
      <View style={styles.orangeHalo} />
      <View style={styles.orangeGlow} />
      <BrandMark />

      <View style={[styles.visualCopy, !isDesktop && styles.visualCopyMobile]}>
        <View style={styles.visualPill}>
          <View style={styles.visualPillDot} />
          <Text style={styles.visualPillText}>LIVE STAFF WORKSPACE</Text>
        </View>
        <Text style={[styles.visualTitle, !isDesktop && styles.visualTitleMobile]}>
          Run today's service without chaos.
        </Text>
        <Text style={styles.visualSubtitle}>
          Tables, orders, kitchen and billing move together in one calm screen.
        </Text>

        <View style={styles.featureRow}>
          {featureChips.map((chip) => (
            <View key={chip} style={styles.featureChip}>
              <Text style={styles.featureChipText}>{chip}</Text>
            </View>
          ))}
        </View>

        <View style={styles.flowRail}>
          <View style={styles.flowSteps}>
            {serviceFlowItems.map((item, index) => (
              <View key={item.label} style={styles.flowStepWrap}>
                <View style={styles.flowIconCard}>
                  <Image
                    accessibilityLabel={`${item.label} flow illustration`}
                    resizeMode="contain"
                    source={item.image}
                    style={styles.flowIcon}
                  />
                  <Text style={styles.flowStepText}>{item.label}</Text>
                </View>
                {index < serviceFlowItems.length - 1 && (
                  <Text style={styles.flowArrow}>→</Text>
                )}
              </View>
            ))}
          </View>
        </View>
      </View>

      <Image
        accessibilityLabel="Restaurant manager using Ordino on a tablet"
        resizeMode="contain"
        source={authIllustration}
        style={[
          styles.illustration,
          isDesktop ? styles.illustrationDesktop : styles.illustrationMobile,
          { height: illustrationHeight },
        ]}
      />
    </View>
  )
}

interface ForgotPasswordContentProps {
  isDesktop: boolean
  onBackToLogin: () => void
}

function ForgotPasswordContent({ isDesktop, onBackToLogin }: ForgotPasswordContentProps) {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState<string | undefined>()
  const [notice, setNotice] = useState<string | null>(null)

  const submit = () => {
    const trimmedEmail = email.trim()

    if (!trimmedEmail) {
      setEmailError('Email is required')
      setNotice(null)
      return
    }

    if (!/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
      setEmailError('Enter a valid email')
      setNotice(null)
      return
    }

    setEmailError(undefined)
    setNotice('Password reset link flow is ready. Backend API wiring comes next.')
  }

  return (
    <View style={[styles.formContent, styles.forgotContent, !isDesktop && styles.mobileFormContent]}>
      {!isDesktop && (
        <Image
          accessibilityLabel="Ordino restaurant workspace logo"
          resizeMode="contain"
          source={ordinoLogoDark}
          style={styles.mobileLogo}
        />
      )}

      <View style={styles.forgotTopRow}>
        <Pressable
          accessibilityRole="button"
          onPress={onBackToLogin}
          style={styles.backButton}
        >
          <Text style={styles.backIcon}>←</Text>
          <Text style={styles.backText}>Back</Text>
        </Pressable>
      </View>

      <View style={styles.resetBadge}>
        <Text style={styles.resetBadgeText}>PASSWORD HELP</Text>
      </View>
      <Text style={[styles.formTitle, styles.forgotTitle, !isDesktop && styles.mobileTitle]}>Reset your password.</Text>
      <Text style={[styles.formSubtitle, styles.forgotSubtitle, !isDesktop && styles.mobileSubtitle]}>
        Enter your work email and we’ll send reset instructions for your Ordino workspace.
      </Text>

      <View style={styles.fields}>
        <AuthTextField
          error={emailError}
          icon="@"
          keyboardType="email-address"
          label="Work email"
          onChangeText={(value) => {
            setEmail(value)
            setEmailError(undefined)
            setNotice(null)
          }}
          placeholder="you@restaurant.com"
          value={email}
        />
      </View>

      <Pressable
        accessibilityRole="button"
        onPress={submit}
        style={({ pressed }) => [
          styles.submitButton,
          styles.resetButton,
          pressed && styles.submitButtonPressed,
        ]}
      >
        <Text style={styles.submitText}>Send reset link</Text>
        <Text style={styles.submitArrow}>{'->'}</Text>
      </Pressable>

      {notice && (
        <View style={styles.notice}>
          <Text style={styles.noticeText}>{notice}</Text>
        </View>
      )}
    </View>
  )
}

export function AuthScreen() {
  const { height, width } = useWindowDimensions()
  const isDesktop = width >= 920
  const form = useAuthForm()
  const [screen, setScreen] = useState<'login' | 'forgot-password'>('login')
  const illustrationHeight = isDesktop
    ? Math.min(560, Math.max(470, height * 0.62))
    : 270

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style={isDesktop ? 'light' : 'dark'} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardArea}
      >
        <View style={styles.page}>
          <View
            style={[
              styles.shell,
              isDesktop ? styles.desktopShell : styles.mobileShell,
              isDesktop && { height },
            ]}
          >
            {isDesktop && (
              <VisualPane
                illustrationHeight={illustrationHeight}
                isDesktop={isDesktop}
              />
            )}

            <View style={[styles.formPane, isDesktop ? styles.formDesktop : styles.formMobile]}>
              {screen === 'forgot-password' ? (
                <ForgotPasswordContent
                  isDesktop={isDesktop}
                  onBackToLogin={() => setScreen('login')}
                />
              ) : (
              <View style={[styles.formContent, !isDesktop && styles.mobileFormContent]}>
                {!isDesktop && (
                  <Image
                    accessibilityLabel="Ordino restaurant workspace logo"
                    resizeMode="contain"
                    source={ordinoLogoDark}
                    style={styles.mobileLogo}
                  />
                )}
                <Text style={[styles.formKicker, !isDesktop && styles.mobileKicker]}>WELCOME BACK</Text>
                <Text style={[styles.formTitle, !isDesktop && styles.mobileTitle]}>Your service starts here.</Text>
                <Text style={[styles.formSubtitle, !isDesktop && styles.mobileSubtitle]}>
                  Sign in to see your floor, kitchen and payments move together.
                </Text>

                <View style={styles.fields}>
                  <AuthTextField
                    error={form.errors.email}
                    icon="@"
                    keyboardType="email-address"
                    label="Work email"
                    onChangeText={(value) => form.updateField('email', value)}
                    placeholder="you@restaurant.com"
                    value={form.values.email}
                  />
                  <AuthTextField
                    error={form.errors.password}
                    icon="*"
                    label="Password"
                    onChangeText={(value) => form.updateField('password', value)}
                    onToggleSecure={() => form.setShowPassword(!form.showPassword)}
                    placeholder="Minimum 8 characters"
                    secureTextEntry={!form.showPassword}
                    value={form.values.password}
                  />
                </View>

                <View style={styles.formOptions}>
                  <Pressable
                    accessibilityRole="checkbox"
                    accessibilityState={{ checked: form.rememberMe }}
                    onPress={() => form.setRememberMe(!form.rememberMe)}
                    style={styles.rememberButton}
                  >
                    <View
                      style={[
                        styles.checkbox,
                        form.rememberMe && styles.checkboxChecked,
                      ]}
                    >
                      {form.rememberMe && <View style={styles.checkboxMark} />}
                    </View>
                    <Text style={styles.optionText}>Remember me</Text>
                  </Pressable>
                  <Pressable
                    accessibilityRole="button"
                    onPress={() => setScreen('forgot-password')}
                  >
                    <Text style={styles.forgotText}>Forgot password?</Text>
                  </Pressable>
                </View>

                <Pressable
                  accessibilityRole="button"
                  onPress={form.submit}
                  style={({ pressed }) => [
                    styles.submitButton,
                    pressed && styles.submitButtonPressed,
                  ]}
                >
                  <Text style={styles.submitText}>Sign in</Text>
                  <Text style={styles.submitArrow}>{'->'}</Text>
                </Pressable>

                {form.notice && (
                  <View style={styles.notice}>
                    <Text style={styles.noticeText}>{form.notice}</Text>
                  </View>
                )}

                <Text style={styles.helpText}>
                  Need an Ordino workspace? <Text style={styles.helpLink}>Contact your admin</Text>
                </Text>
              </View>
              )}
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
