import React, { useState } from 'react';
import { StyleSheet } from "react-native";
import { Form, Item, Label, Input, Button, Text, Spinner } from 'native-base';
import { IUserUpdateData, ICityItem } from 'friendshome-api';
import { connect } from 'react-redux';
import { register } from '../../store/user/actions';
import { toAccounnt } from '../../utilites/appNavigation';
import CitySelect from '../elements/CitySelect';
import Toast from '../../utilites/toastr';
import PhoneInput from '../elements/PhoneInput';

interface IRegisterProps {
  register: (data: IUserUpdateData) => Promise<any>;
}

const Register: React.FC<IRegisterProps> = ({ register }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [c_password, setСPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState<ICityItem | undefined>();

  function onRegister() {
    if (city) {
      setLoading(true);
      register({
        mobile,
        name,
        password,
        c_password,
        city_id: city.id
      }).then(() => {
        Toast.success('Добро пожаловать!');
        toAccounnt();
        setLoading(false);
      })
        .catch((e) => {
          setLoading(false);
        });
    } else {
      Toast.error('Выберите пожалуйста город');
    }
  }

  return (
    <Form>
      <Item stackedLabel style={styles.Item}>
        <Label>Город</Label>
        <CitySelect
          onSelected={setCity}
          includedRegins={false}
          value={city}
        />
      </Item>
      <Item stackedLabel style={styles.Item}>
        <Label>Имя</Label>
        <Input
          value={name}
          onChangeText={setName}
          disabled={loading}
        />
      </Item>
      <Item stackedLabel style={styles.Item}>
        <Label>Моб. номер</Label>
        <PhoneInput
          value={mobile}
          onChange={setMobile}
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
      <Button style={styles.Btn} onPress={onRegister} disabled={loading}>
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
  register
})(Register);