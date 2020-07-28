import React, { useEffect, useState } from 'react';
import { Content, Button } from 'native-base';
import { Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { IState } from '../../../store/types';
import { IUser } from '../../../store/user';

import InstagramLogin from 'react-native-instagram-login';

interface IProps {
  user: IUser,
}

const Instagram: React.FC<IProps> = ({ user }) => {
    const [instagramLogin, setInstagramLogin] = useState<any>();
    
    function showInstagramLogin() {
      instagramLogin.show();
    }

    return (
        <Content padder>
            <Button block style={styles.Btn} onPress={showInstagramLogin}>
              <Text style={styles.BtnText}>
                Подключить
              </Text>
            </Button>
            
            <InstagramLogin
                ref={(ref: any) => (setInstagramLogin(ref))}
                appId='714662742658912'
                appSecret='e7ef1c038fb3d9e8ae61f61d2531308a'
                redirectUrl='https://127.0.0.1:8000/instagram/auth'
                scopes={['user_profile', 'user_media']}
                onLoginSuccess={(data: any) => console.log(data)}
                onLoginFailure={(data: any) => console.log(data)}
            />
        </Content>
  );
};

const styles = StyleSheet.create({
  Btn: {
    justifyContent: 'center',
    width: 200,
    marginTop: 15,
  },
  BtnText: {
    color: 'white'
  },
});

const mapStateToProps = ({ user: { user }}: IState) => {
  return { user };
};

export default connect(mapStateToProps, {
})(Instagram);