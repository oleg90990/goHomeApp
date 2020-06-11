import React, { useState } from 'react';
import { StyleSheet } from "react-native";
import { Form, Item, Label, Input, Button, Text, Spinner, View } from 'native-base';
import { connect } from 'react-redux';
import { login  } from '../../store/user/actions';
import { toAccounnt } from '../../utilites/appNavigation';

interface ILoginProps {
  login: (username: string, password: string) => Promise<any>
}

const Login: React.FC<ILoginProps> = ({ login }) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function toLogin() {
    setLoading(true);
    login(username, password)
      .then(() => {
        toAccounnt();
        setLoading(false);
      }).catch(e => {
        setError(e);
        setLoading(false);
      })
  }

  return (
    <Form >
        <Item inlineLabel style={styles.Item}>
            <Label>Имя</Label>
            <Input
              value={username}
              onChangeText={setUserName}
              disabled={loading}
            />
        </Item>
        <Item inlineLabel style={styles.Item}>
            <Label>Пароль</Label>
            <Input
              value={password}
              onChangeText={setPassword}
              disabled={loading}
              secureTextEntry={true}
            />
        </Item>
        {( error ? <Text style={styles.ErrorText}>{ error }</Text> : null )}
        <Button style={styles.Btn} onPress={toLogin} disabled={loading}>
            {( loading ? <Spinner color={'white'} /> :  <Text>Вход</Text> )}
        </Button> 
    </Form>
  );
};

// styles
const styles = StyleSheet.create({
  Btn: {
    justifyContent: 'center',
    width: 200,
    marginTop: 15
  },
  ErrorText: {
    color: 'red',
    marginTop: 15
  },
  Item: {
    marginLeft: 0
  }
});

export default connect(null, {
  login
})(Login);