import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenOne from './screens/onboarding/ScreenOne';
import ScreenTwo from './screens/onboarding/ScreenTwo';
import ScreenThree from './screens/onboarding/ScreenThree';
import LoginScreen from './screens/login/LoginScreen';
import SignUpScreen from './screens/login/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import ParlayDetailScreen from './screens/bets/ParlayDetailScreen';
import BetDetailScreen from './screens/bets/BetDetailScreen';

const Stack = createStackNavigator();

const App = () => {
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
