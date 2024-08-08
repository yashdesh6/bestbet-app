import React, { useState, useEffect, Suspense } from "react";
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
import * as FileSystem from 'expo-file-system'
import { View, ActivityIndicator, Text } from 'react-native';
// import { initDB } from './db'; // Import the initDB function
import {Asset} from 'expo-asset'
import { SQLiteDatabase, openDatabaseAsync } from "expo-sqlite/next";
import { SQLiteProvider } from "expo-sqlite/next"; // Import SQLiteProvider

const Stack = createStackNavigator();

// const loadDatabase = async () => {
//   const dbName = "bestbet.db";
//   const dbAsset = require("./assets/bestbet.db");
//   const dbUri = Asset.fromModule(dbAsset).uri;
//   const dbFilePath = `${FileSystem.documentDirectory}SQLite/${dbName}`;

//   const fileInfo = await FileSystem.getInfoAsync(dbFilePath);
//   if (!fileInfo.exists) {
//     await FileSystem.makeDirectoryAsync(
//       `${FileSystem.documentDirectory}SQLite`,
//       { intermediates: true }
//     );
//     await FileSystem.downloadAsync(dbUri, dbFilePath);
//   }
// };

async function initializeDatabase(db){
  try{
    await db.execAsync(`
    PRAGMA journal_mode = WAL;

    CREATE TABLE IF NOT EXISTS Parlays (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      grade TEXT,
      description TEXT,
      image TEXT,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS Bets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      parlay_id INTEGER,
      bet_number REAL NOT NULL,
      defense_data TEXT,
      grade TEXT,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      graph_key TEXT,
      insights TEXT,
      over_under_analysis TEXT,
      player_data TEXT,
      response TEXT,
      user_prompt TEXT,
      FOREIGN KEY (parlay_id) REFERENCES Parlays (id)
    );
    `);
    console.log('Database initialized!');
  } catch (error) {
    console.log('Error while initializing database : ', error);
  }
}


const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [dbLoaded, setDbLoaded] = useState(false);

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
    // loadDatabase()
      // .then(() => setDbLoaded(true))
      // .catch((e) => console.error(e));
      // if(!dbLoaded) return <Text>Loading...</Text>;
  }, []);

  return (
    <SQLiteProvider databaseName='bestbet2.db' onInit={initializeDatabase}>
      <NavigationContainer>
        <Suspense
          fallback={
            <View style={{ flex: 1 }}>
              <ActivityIndicator size={"large"} />
              <Text>Loading Database...</Text>
            </View>
          }
        >
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
        </Suspense>
      </NavigationContainer>
    </SQLiteProvider> 
  );
};

export default App;
