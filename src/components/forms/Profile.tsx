import React, { useState } from 'react';
import { IUser, IUserUpdateData, ICityItem } from 'friendshome-api';
import { StyleSheet } from "react-native";
import { Form, Item, Label, Input, Button, Spinner, Text } from 'native-base';
import { toAccounnt } from '../../utilites/appNavigation'
import { connect } from 'react-redux';
import { update } from '../../store/user/actions';
import { IState } from '../../store/types';
import Toast from '../../utilites/toastr';
import CitySelect from '../elements/CitySelect';
import PhoneInput from '../elements/PhoneInput';

interface IProps {
  user: IUser;
  update: (data: IUserUpdateData) => Promise<any>;
}

const Profile: React.FC<IProps> = ({ user, update }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [mobile, setMobile] = useState(user.mobile);
  const [password, setPassword] = useState('');
  const [c_password, setCPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState<ICityItem | undefined>(user.city);

  function onSave() {
    if (city) {
      setLoading(true);
      update({
        mobile,
        email,
        name,
        password,
        c_password,
        city_id: city.id
      }).then(() => {
        Toast.success('Успешно обновлено');
        toAccounnt();
        setLoading(false);
      })
        .catch(() => {
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
        <Label>E-Mail адрес</Label>
        <Input
          value={email}
          onChangeText={setEmail}
          disabled={loading}
        />
      </Item>
      <Item stackedLabel style={styles.Item}>
        <Label>Моб. номер</Label>
        <PhoneInput
          value={mobile}
          onChange={() => {}}
          disabled={true}
        />
      </Item>
      <Item stackedLabel style={styles.Item}>
        <Label>Новый пароль</Label>
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
          onChangeText={setCPassword}
          disabled={loading}
        />
      </Item>
      <Button style={styles.Btn} onPress={onSave} disabled={loading}>
        {( loading ? <Spinner color={'white'} /> : <Text>Сохранить</Text> )}
      </Button> 
    </Form>
  );
};

const styles = StyleSheet.create({
  Btn: {
    marginTop: 20,
    justifyContent: 'center',
    width: 200
  },
  Item: {
    marginLeft: 0
  }
});

const mapStateToProps = ({ user: { user }}: IState) => {
  return { user };
};

export default connect(mapStateToProps, {
  update
})(Profile);