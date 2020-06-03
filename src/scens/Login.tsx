import React, { useState } from 'react';
import LoginForm from '../components/forms/Login';
import { Content } from 'native-base';
import { StyleSheet } from "react-native";

const Login: React.FC = () => { 
  return (
    <Content padder contentContainerStyle={styles.content}>
      <LoginForm />
    </Content>
  );
};

const styles = StyleSheet.create({
  content: {
    flex:1,
    justifyContent: 'center'
  },
  btn: {
    marginTop: 20,
    justifyContent: 'center'
  }
});

export default Login;