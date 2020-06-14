import React, { useState } from 'react';
import RegisterForm from '../../components/forms/Register';
import { Content } from 'native-base';
import { StyleSheet } from "react-native";
import { ILoginProps } from "./types";

const Register: React.FC<ILoginProps> = () => { 
  return (
    <Content padder contentContainerStyle={styles.Content}>
      <RegisterForm />
    </Content>
  );
};

const styles = StyleSheet.create({
  Content: {
  }
});

export default Register;