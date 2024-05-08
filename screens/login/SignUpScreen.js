import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BestBet</Text>
      <Text style={styles.header}>WELCOME!</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#d3d3d3"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#d3d3d3"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#d3d3d3"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
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
        style={styles.signUpButton}
        onPress={() => console.log('Sign Up')}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or</Text>
      {/* Social sign-ins would go here */}
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.loginPrompt}>Already have an account? Login</Text>
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
  signUpButton: {
    backgroundColor: '#007aff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 16,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  orText: {
    color: '#666',
    marginBottom: 16,
  },
  loginPrompt: {
    color: '#b3b3b3',
  },
});

export default SignUpScreen;
