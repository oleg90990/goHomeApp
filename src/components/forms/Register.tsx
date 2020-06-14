import React, { useState } from 'react';
import { StyleSheet } from "react-native";
import { Form, Item, Label, Input, Button, Text, Spinner } from 'native-base';
import { connect } from 'react-redux';
import { login  } from '../../store/user/actions';
import { toAccounnt } from '../../utilites/appNavigation';

interface IRegisterProps {
  login: (email: string, password: string) => Promise<any>
}

const Register: React.FC<IRegisterProps> = ({ login }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [c_password, setСPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function toRegister() {
    setLoading(true);
    // login(email, password)
    //   .then(() => {
    //     toAccounnt();
    //     setLoading(false);
    //   })
    //   .catch(() => {
    //     setLoading(false);
    //   });
  }

  return (
    <Form>
      <Item stackedLabel style={styles.Item}>
        <Label>Имя</Label>
        <Input
          value={name}
          onChangeText={setName}
          disabled={loading}
        />
      </Item>
      <Item stackedLabel style={styles.Item}>
        <Label>Email</Label>
        <Input
          value={email}
          onChangeText={setEmail}
          disabled={loading}
        />
      </Item>
      <Item stackedLabel style={styles.Item}>
        <Label>Пароль</Label>
        <Input
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
          disabled={loading}
        />
      </Item>
      <Item stackedLabel style={styles.Item}>
        <Label>Повторите пароль</Label>
        <Input
          value={c_password}
          secureTextEntry={true}
          onChangeText={setСPassword}
          disabled={loading}
        />
      </Item>
      <Button style={styles.Btn} onPress={toRegister} disabled={loading}>
        {( loading ? <Spinner color={'white'} /> : <Text>Регистрация</Text> )}
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
})(Register);