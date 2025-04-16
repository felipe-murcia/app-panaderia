import Main from "@/src/screens/Main";
import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

    const [loaded] = useFonts({
      PoppinsLight: require('../assets/fonts/Poppins-Light.ttf'),
      PoppinsSemiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
      PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
    });
  
    useEffect(() => {
      if (loaded) {
        SplashScreen.hideAsync();
      }
    }, [loaded]);
  
    if (!loaded) {
      return null;
    }
    return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: true, headerTitle: 'nada' }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    );

  // return <Main />;
}
