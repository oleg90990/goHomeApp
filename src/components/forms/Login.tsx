import React, { useState } from 'react';
import { StyleSheet } from "react-native";
import {  Form, Item, Label, Input, Button, Text } from 'native-base';
import { Action, Scens } from '../../utilites/appNavigation';

const Login: React.FC = () => {
  const [
    username,
    setUserName
   ] = useState<string>('')

  const [
    password,
    setPassword
   ] = useState<string>('')
  
  const toLogin = () => {
    Action(Scens.accounnt);
  }
  
  return (
    <Form >
        <Item inlineLabel>
            <Label>Имя</Label>
            <Input
              value={username}
              onChangeText={setUserName}
            />
        </Item>
        <Item inlineLabel>
            <Label>Пароль</Label>
            <Input
              value={password}
              onChangeText={setPassword}
            />
        </Item>
        <Button style={styles.Btn} onPress={toLogin}>
            <Text>Вход</Text>
        </Button>
    </Form>
  );
};

// styles
const styles = StyleSheet.create({
  Btn: {
    marginTop: 20,
    justifyContent: 'center',
    width: 200
  }
});

export default Login;