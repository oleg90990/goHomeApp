import React, { useState } from 'react';
import { StyleSheet } from "react-native";
import { Form, Item, Label, Input, Button, Spinner, Text } from 'native-base';
import { toAccounnt } from '../../utilites/appNavigation'
import { connect } from 'react-redux';
import { IStateUserReducer } from '../../store/user';
import { saveUserData } from '../../store/user/actions';
import { IState } from '../../store/types';

interface IProps extends IStateUserReducer {
  saveUserData: (phone: string, newPassword?: string, replyPassword?: string ) => Promise<any>
}

const Profile: React.FC<IProps> = ({ phone, saveUserData }) => {
  const [phoneInput, setPhone] = useState(phone);
  const [password, setPassword] = useState('');
  const [reply_password, setReplyPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function onSave() {
    if (password !== reply_password) {
      setError('Пароли не совпадают');
    } else {
      setLoading(true);
      saveUserData(phoneInput, password, reply_password)
        .then(() => {
          toAccounnt();
          setLoading(false);
        })
        .catch(e => {
          setError(e);
          setLoading(false);
        });
    }
  }

  return (
    <Form>
      <Item style={styles.Item}>
        <Label>Номер телефона</Label>
        <Input
          value={phoneInput}
          onChangeText={setPhone}
          disabled={loading}
        />
      </Item>
      <Item style={styles.Item}>
        <Label>Новый пароль</Label>
        <Input
          secureTextEntry={true}
          onChangeText={setPassword}
          disabled={loading}
        />
      </Item>
      <Item style={styles.Item}>
        <Label>Повторите пароль</Label>
        <Input
          secureTextEntry={true}
          onChangeText={setReplyPassword}
          disabled={loading}
        />
      </Item>
      {( error ? <Text style={styles.ErrorText}>{ error }</Text> : null )}
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
  },
  ErrorText: {
    color: 'red',
    marginTop: 15
  },
});

const mapStateToProps = ({ user }: IState) => {
  return user;
};

export default connect(mapStateToProps, {
  saveUserData
})(Profile);