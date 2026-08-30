import { useFonts } from 'expo-font'
import { ActivityIndicator, View } from 'react-native'

import { AuthScreen } from './src/modules/auth'
import { colors } from './src/theme/tokens'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light: require('./assets/fonts/Poppins_300Light.ttf'),
    Poppins_400Regular: require('./assets/fonts/Poppins_400Regular.ttf'),
    Poppins_500Medium: require('./assets/fonts/Poppins_500Medium.ttf'),
  })

  if (!fontsLoaded) {
    return (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: colors.canvas,
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <ActivityIndicator color={colors.brand} />
      </View>
    )
  }

  return <AuthScreen />
}
