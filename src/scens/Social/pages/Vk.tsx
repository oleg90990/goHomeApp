import React, { useState, useEffect } from 'react';
import { Content, Spinner, List, ListItem, Button, View, Card, CardItem, Body } from 'native-base';
import { StyleSheet, Text } from "react-native";
import VKLogin, { VKLoginResult } from 'react-native-vkontakte-login';

import { connect } from 'react-redux';
import { IState } from '../../../store/types';
import { vkSave, vkGroups, vkGroupsStore } from '../../../store/user/actions';
import { IUser, IGroupItem } from 'friendshome-api';

import { toBack } from "../../../utilites/appNavigation";

import CheckBox from '@react-native-community/checkbox';
import Toast from '../../../utilites/toastr';

interface IProps {
  user: IUser;
  vkSave: (data: VKLoginResult) => Promise<any>;
  vkGroups: () => Promise<IGroupItem[]>;
  vkGroupsStore: (groups: number[]) => Promise<any>;
}

const Vk: React.FC<IProps> = ({ user, vkSave, vkGroups, vkGroupsStore }) => {
  const [loading, setLoading] = useState(false);
  const [groups, setGroups] = useState<IGroupItem[]>([]);
  const [selected, setSelected] = useState<number[]>(user.vkGroups);

  function loadGroups() {
    setLoading(true);
    vkGroups()
      .then(data => {
        setGroups(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  function save(data: VKLoginResult) {
    setLoading(true);
    vkSave(data)
      .then(() => {
        loadGroups();
      })
      .catch(() => {
        setLoading(false);
      });
  }

  function submit() {
    setLoading(true);
    vkGroupsStore(selected)
      .then(() => {
        Toast.success('Сохранено');
        toBack();
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    VKLogin.initialize(7525785);

    if (!user.vk) {
      VKLogin
        .login(['groups', 'wall', 'photos'])
        .then(save);
    } else {
      loadGroups();
    }
  }, []);

  function onValueChange(id: number) {
    const index = selected.indexOf(id);

    if (index >= 0) {
      selected.splice(index, 1);
    } else {
      selected.push(id);
    }

    setSelected([...selected]);
  }

  return (
    <Content padder>
      <Card style={styles.Message}>
        <CardItem>
          <Body>
            <Text>
                Укажите группы в которых будут публиковаться посты. Созданные посты будут редактироваться и удалятся в случае закрытия объявления.
            </Text>
          </Body>
        </CardItem>
      </Card>
      { loading ? <Spinner /> :
        <View>
          <List>
            {groups.map(({ name, id }, key) => {
              return <ListItem key={key} style={styles.Checkbox}>
                <CheckBox
                  value={selected.indexOf(id) >= 0}
                  onValueChange={() => onValueChange(id)}
                />
                <Text>
                  { name }
                </Text>
              </ListItem>
            })}
          </List>
          <Button style={styles.Btn} onPress={submit}>
            <Text style={styles.BtnText}>
              Сохранить
            </Text>
          </Button>
        </View>
      }
    </Content>
  );
};

const styles = StyleSheet.create({
  Message: {
    marginBottom: 10
  },
  Checkbox: {
    flexDirection: "row",
    marginLeft: 0
  },
  Btn: {
    justifyContent: 'center',
    width: 200,
    marginTop: 15,
  },
  BtnText: {
    color: 'white'
  },
  Thumbnail: {
    width: 30,
    height: 30
  }
});

const mapStateToProps = ({ user: { user }}: IState) => {
  return { user };
};

export default connect(mapStateToProps, {
  vkSave, vkGroups, vkGroupsStore
})(Vk);