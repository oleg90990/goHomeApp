import React from 'react';
import { Content, CardItem, Card, Icon, Right, Body } from 'native-base';
import { StyleSheet, Text, Image, ImageSourcePropType, TouchableOpacity } from "react-native";
import { ISocialProps } from "./types";
import { toVkPage, toInstagramPage } from "../../utilites/appNavigation";

import { connect } from 'react-redux';
import { IState } from '../../store/types';


interface SocialButtons {
  icon: ImageSourcePropType,
  title: string,
  action: () => void,
}

const Social: React.FC<ISocialProps> = ({ user }) => { 
  const items: SocialButtons[] = [
    {
      title: !user.vk ? 'Не подключено' : 'Подключено',
      icon: require(`../../assets/social/vk.png`),
      action: toVkPage
    },
    {
      title: 'Не подключено',
      icon: require(`../../assets/social/instagram.png`),
      action: toInstagramPage
    },
  ];
  
  return (
    <Content padder>
        <Card style={styles.Message}>
          <CardItem>
            <Body>
                <Text>
                  Прикрепите социальные сети для того что бы автоматически создавать и редактиравать объявления. Таким образом ваше объявление увидит больше человек
                </Text>
            </Body>
          </CardItem>
        </Card>

        { items.map(({ title, icon, action }, key) => {
          return <TouchableOpacity key={key} onPress={action}>
            <Card>
              <CardItem>
                <Image style={styles.Icon} source={icon}/>
                <Text>{ title }</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </Card>
          </TouchableOpacity>
        })}
    </Content>
  );
};

const styles = StyleSheet.create({
  Message: {
    marginBottom: 10
  },
  Icon: {
    height: 30,
    width: 55,
    marginRight: 30
  }
});

const mapStateToProps = ({ user: { user }}: IState) => {
  return { user };
};

export default connect(mapStateToProps, {})(Social);