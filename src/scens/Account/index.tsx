import React, { useEffect } from 'react';
import { StyleSheet } from "react-native";
import { IAccountProps } from "./types";
import { Text, Content, List, ListItem } from 'native-base';
import { toProfile } from '../../utilites/appNavigation';

import { connect } from 'react-redux';
import { logout  } from '../../store/user/actions';
import { toAccounnt } from '../../utilites/appNavigation';

const Account: React.FC<IAccountProps> = (props) => {
  function toLogout() {
    props.logout();
    toAccounnt();
  }
  
  return (
    <Content>
      <List>
        <ListItem onPress={() => toProfile() }>
          <Text>Профиль</Text>
        </ListItem>
        <ListItem>
          <Text>Мои объявления</Text>
        </ListItem>
        <ListItem onPress={() => toLogout() }>
          <Text>Выход</Text>
        </ListItem>
      </List>
    </Content>
  );
};

// styles
const styles = StyleSheet.create({
});

export default connect(null, {
  logout
})(Account);