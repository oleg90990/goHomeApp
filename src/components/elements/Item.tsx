import React from 'react';
import { CardItem, Text , Card, Left, Body } from 'native-base';
import { Image, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Action, Scens } from '../../utilites/appNavigation';

interface IItemState {
    id: number,
    title: string,
    image: string
}
  
const Item: React.FC<IItemState> = (props) => {
  function toItem() {
    Action(Scens.item, {
        id: props.id
    })
  }

  return (
      <TouchableNativeFeedback onPress={() => toItem() }>
        <Card>
            <CardItem cardBody>
            <Image source={{uri: props.image }} style={styles.Image}/>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>{ props.title }</Text>
                </Body>
            </CardItem>
        </Card>
      </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
    Image: {
        height: 200,
        width: '100%',
        flex: 1
    }
});

export default Item;