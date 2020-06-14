import React, { useState } from 'react';
import { StyleSheet } from "react-native";
import { Form, Item, Label, Input, Button, Spinner, Text } from 'native-base';
import { toAccounnt } from '../../utilites/appNavigation'
import { connect } from 'react-redux';
import { IUser } from '../../store/user';
import { update } from '../../store/user/actions';
import { IState } from '../../store/types';
import Toast from '../../utilites/toastr';

interface IProps {
  user: IUser,
  update: (email: string, name: string, password?: string, c_password?: string) => Promise<any>
}

const Profile: React.FC<IProps> = ({ user, update }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [c_password, setCPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function onSave() {
    setLoading(true);
    update(
      email,
      name,
      password,
      c_password
    ).then(() => {
      Toast.success('Успешно обновлено');
      toAccounnt();
      setLoading(false);
    })
    .catch(() => {
      setLoading(false);
    });
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