import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenOne from './screens/onboarding/ScreenOne';
import ScreenTwo from './screens/onboarding/ScreenTwo';
import ScreenThree from './screens/onboarding/ScreenThree';
import LoginScreen from './screens/login/LoginScreen';
import SignUpScreen from './screens/login/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import ParlayDetailScreen from './screens/bets/ParlayDetailScreen';
import ScreenZero from "./screens/onboarding/ScreenZero";
import BetDetailScreen from "./screens/bets/BetDetailScreen";

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
        "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
        "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
        "Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.ttf"),
        "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
        "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
        "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
        "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
        "Inter-Thin": require("./assets/fonts/Inter-Thin.ttf"),
        "JetBrainsMono-ExtraBold": require("./assets/fonts/JetBrainsMono-ExtraBold.ttf"),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenOne" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ScreenOne" component={ScreenOne} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
        <Stack.Screen name="ScreenThree" component={ScreenThree} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignUpScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ParlayDetailScreen" component={ParlayDetailScreen} />
        <Stack.Screen name="BetDetailScreen" component={BetDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
