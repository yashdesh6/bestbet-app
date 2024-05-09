import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BestBet</Text>
      <Text style={styles.header}>LOGIN TO YOUR ACCOUNT</Text>
      <TextInput
        style={styles.input}
        placeholder="Email/username"
        placeholderTextColor="#d3d3d3"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#d3d3d3"
        secureTextEntry
      />
      <View style={styles.optionContainer}>
        <View style={styles.rememberMeContainer}>
          <TouchableOpacity style={styles.rememberMeCheck}>
            <View style={styles.checkbox} />
          </TouchableOpacity>
          <Text style={styles.optionText}>Remember me</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or</Text>
      {/* Social sign-ins would go here */}
      <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.signUpText}>Need an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', // Equivalent to bg-zinc-950
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 40,
  },
  title: {
    color: '#007aff', // Equivalent to text-blue-500
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  header: {
    color: 'white',
    fontSize: 20,
    marginBottom: 32,
  },
  input: {
    backgroundColor: '#333',
    color: 'white',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 16,
    width: '100%',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeCheck: {
    marginRight: 8,
  },
  checkbox: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#b3b3b3',
  },
  optionText: {
    color: '#b3b3b3',
  },
  forgotPassword: {
    color: '#007aff',
  },
  loginButton: {
    backgroundColor: '#007aff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 16,
    width: '100%',
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  orText: {
    color: '#666',
    marginBottom: 16,
  },
  signUpText: {
    color: '#b3b3b3',
  },
});

export default LoginScreen;
