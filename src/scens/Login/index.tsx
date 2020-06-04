import React, { useState } from 'react';
import LoginForm from '../../components/forms/Login';
import { Content } from 'native-base';
import { StyleSheet } from "react-native";
import { ILoginProps } from "./types";

const Login: React.FC<ILoginProps> = () => { 
  return (
    <Content padder contentContainerStyle={styles.Content}>
      <LoginForm />
    </Content>
  );
};

const styles = StyleSheet.create({
  Content: {
  }
});

export default Login;