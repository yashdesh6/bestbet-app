import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-zinc-950 items-center px-4 py-10">
      <Text className="text-blue-500 text-3xl font-bold mb-4">BestBet</Text>
      <Text className="text-white text-xl mb-8">LOGIN TO YOUR ACCOUNT</Text>
      <TextInput
        className="bg-gray-800 text-white rounded-lg px-4 py-2 mb-4 w-full"
        placeholder="Email/username"
        placeholderTextColor="#d3d3d3"
      />
      <TextInput
        className="bg-gray-800 text-white rounded-lg px-4 py-2 mb-4 w-full"
        placeholder="Password"
        placeholderTextColor="#d3d3d3"
        secureTextEntry
      />
      <View className="flex-row justify-between w-full mb-4">
        <View className="flex-row items-center">
          <TouchableOpacity className="mr-2">
            <View className="h-4 w-4 rounded-full border border-gray-500" />
          </TouchableOpacity>
          <Text className="text-gray-300">Remember me</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-blue-500">Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        className="bg-blue-500 py-2 px-4 rounded-lg mb-4 w-full"
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Text className="text-white text-center">Login</Text>
      </TouchableOpacity>
      <Text className="text-gray-400 mb-4">Or</Text>
      {/* Social sign-ins would go here */}
      <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
        <Text className="text-gray-300">Need an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
