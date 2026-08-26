import { Pressable, Text, View } from 'react-native'

import { useAuthForm } from '../hooks/useAuthForm'
import { AuthFields } from './AuthFields'
import { AuthFormOptions } from './AuthFormOptions'
import { AuthModeSwitch } from './AuthModeSwitch'
import { BrandMark } from './BrandMark'
import { styles } from './auth-form.styles'

interface AuthFormProps {
  showBrand?: boolean
}

export function AuthForm({ showBrand = false }: AuthFormProps) {
  const form = useAuthForm()
  const isLogin = form.mode === 'login'

  return (
    <View style={styles.container}>
      {showBrand && (
        <View style={styles.mobileBrand}>
          <BrandMark />
        </View>
      )}

      <Text style={styles.eyebrow}>YOUR ORDINO WORKSPACE</Text>
      <Text style={styles.title}>
        {isLogin ? 'Welcome back' : 'Create your account'}
      </Text>
      <Text style={styles.subtitle}>
        {isLogin
          ? 'Sign in to continue managing your restaurant.'
          : 'Start building a better guest experience.'}
      </Text>

      <AuthModeSwitch mode={form.mode} onChange={form.changeMode} />

      <View style={styles.fields}>
        <AuthFields
          errors={form.errors}
          mode={form.mode}
          onChange={form.updateField}
          onTogglePassword={() => form.setShowPassword(!form.showPassword)}
          showPassword={form.showPassword}
          values={form.values}
        />
      </View>

      <AuthFormOptions
        mode={form.mode}
        onForgotPassword={() =>
          form.setNotice('Password recovery will be connected with the backend.')
        }
        onToggleRemember={() => form.setRememberMe(!form.rememberMe)}
        rememberMe={form.rememberMe}
      />

      <Pressable
        accessibilityRole="button"
        onPress={form.submit}
        style={({ pressed }) => [
          styles.submitButton,
          pressed && styles.pressedButton,
        ]}
      >
        <Text style={styles.submitText}>
          {isLogin ? 'Sign in to Ordino' : 'Create account'}
        </Text>
        <Text style={styles.arrow}>→</Text>
      </Pressable>

      {form.notice && (
        <View style={styles.notice}>
          <Text style={styles.noticeText}>{form.notice}</Text>
        </View>
      )}

      <Text style={styles.helpText}>
        Need help? <Text style={styles.helpLink}>Contact your workspace admin</Text>
      </Text>
    </View>
  )
}
