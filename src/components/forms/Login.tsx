import React, { useState } from 'react';
import { StyleSheet } from "react-native";
import { Form, Item, Label, Input, Button, Text, Spinner, View } from 'native-base';
import { connect } from 'react-redux';
import { login  } from '../../store/user/actions';
import { toAccounnt, toRegister } from '../../utilites/appNavigation';
import Toast from '../../utilites/toastr';
import PhoneInput from '../elements/PhoneInput';

interface ILoginProps {
  login: (mobile: string, password: string) => Promise<any>
}

const Login: React.FC<ILoginProps> = ({ login }) => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function toLogin() {
    setLoading(true);
    login(mobile, password)
      .then(() => {
        Toast.success('Добро пожаловать!');
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
            <Label>Моб. номер</Label>
            <PhoneInput
              value={mobile}
              onChange={setMobile}
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
        <View style={styles.Actions}>
          <Button style={styles.BtnLogin} block onPress={toLogin} disabled={loading}>
              {( loading ? <Spinner color={'white'} /> : <Text>Вход</Text> )}
          </Button>
          <Text style={styles.BtnRegister} onPress={toRegister}>
             Регистрация
          </Text>
        </View>
    </Form>
  );
};

// styles
const styles = StyleSheet.create({
  BtnLogin: {
    width: '40%'
  },
  BtnRegister: {
    width: '40%'
  },
  Item: {
    marginLeft: 0
  },
  Actions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20
  }
});

export default connect(null, {
  login
})(Login);