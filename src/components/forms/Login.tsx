import React, { useState } from 'react';
import { StyleSheet } from "react-native";
import {  Form, Item, Label, Input, Button, Text, View, Spinner } from 'native-base';
import { toAccounnt } from '../../utilites/appNavigation';
import API from '../../api';


import { connect } from 'react-redux';
import { setUser  } from '../../store/user/actions';
import { IStateUserReducer } from '../../store/user';

interface ILoginProps {
  setUser: (user: IStateUserReducer) => void
}

const Login: React.FC<ILoginProps> = props => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function toLogin() {
    setLoading(true);
    API.login(username, password)
      .then(user => {
        props.setUser(user);
        toAccounnt();
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }

  return (
    <Form >
        <Item inlineLabel>
            <Label>Имя</Label>
            <Input
              value={username}
              onChangeText={setUserName}
              disabled={loading}
            />
        </Item>
        <Item inlineLabel>
            <Label>Пароль</Label>
            <Input
              value={password}
              onChangeText={setPassword}
              disabled={loading}
              secureTextEntry={true}
            />
        </Item>
        {( error ? <View style={styles.Padder}>
            <Text style={styles.ErrorText}>{ error }</Text>
          </View> : null
        )}
        {( loading ? <Spinner /> : 
          <Button block style={[styles.Btn, styles.Padder]} onPress={toLogin}>
              <Text>Вход</Text>
          </Button> )}
    </Form>
  );
};

// styles
const styles = StyleSheet.create({
  Btn: {
    marginTop: 20,
    justifyContent: 'center',
    width: 200
  },
  Padder: {
    paddingHorizontal: 15,
    marginVertical: 15
  },
  ErrorText: {
    color: 'red'
  }
});

export default connect(null, {
  setUser
})(Login);