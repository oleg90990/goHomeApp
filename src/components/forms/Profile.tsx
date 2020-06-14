import React, { useState } from 'react';
import { StyleSheet } from "react-native";
import { Form, Item, Label, Input, Button, Spinner, Text } from 'native-base';
import { toAccounnt } from '../../utilites/appNavigation'
import { connect } from 'react-redux';
import { IUser } from '../../store/user';
import { saveUserData } from '../../store/user/actions';
import { IState } from '../../store/types';

interface IProps {
  user: IUser,
  saveUserData: (phone: string, newPassword?: string, replyPassword?: string ) => Promise<any>
}

const Profile: React.FC<IProps> = ({ user, saveUserData }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [reply_password, setReplyPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function onSave() {
    setLoading(true);
    saveUserData(name, password, reply_password)
      .then(() => {
        toAccounnt();
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
          onChangeText={setName}
          disabled={loading}
        />
      </Item>
      <Item stackedLabel style={styles.Item}>
        <Label>Новый пароль</Label>
        <Input
          secureTextEntry={true}
          onChangeText={setPassword}
          disabled={loading}
        />
      </Item>
      <Item stackedLabel style={styles.Item}>
        <Label>Повторите пароль</Label>
        <Input
          secureTextEntry={true}
          onChangeText={setReplyPassword}
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
  saveUserData
})(Profile);