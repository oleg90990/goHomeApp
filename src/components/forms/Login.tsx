import React, { useState } from 'react';
import { StyleSheet } from "react-native";
import { Form, Item, Label, Input, Button, Text, Spinner } from 'native-base';
import { connect } from 'react-redux';
import { login  } from '../../store/user/actions';
import { toAccounnt } from '../../utilites/appNavigation';

interface ILoginProps {
  login: (email: string, password: string) => Promise<any>
}

const Login: React.FC<ILoginProps> = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function toLogin() {
    setLoading(true);
    login(email, password)
      .then(() => {
        toAccounnt();
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  return (
    <Form >
        <Item inlineLabel style={styles.Item}>
            <Label>Имя</Label>
            <Input
              value={email}
              onChangeText={setEmail}
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
  Item: {
    marginLeft: 0
  }
});

export default connect(null, {
  login
})(Login);