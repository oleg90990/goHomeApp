import React, { memo }  from 'react';
import { CardItem, Text , Card, Left, Body } from 'native-base';
import { Image, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { toItem as toItemScen  } from '../../../utilites/appNavigation';
import { IItem } from 'friendshome-api';

export interface IItemListInterface {
    item: IItem
}

export const Item = memo(({ item }: IItemListInterface) => (
    <TouchableNativeFeedback onPress={() => toItemScen({ item })}>
        <Card>
            {( item.images[0] ? <CardItem cardBody>
                <Image source={{uri: item.images[0] }} style={styles.Image}/>
            </CardItem> : null)}
            <CardItem>
                <Body>
                    <Text>{ item.title }</Text>
                </Body>
            </CardItem>
        </Card>
    </TouchableNativeFeedback>
))


const styles = StyleSheet.create({
    Image: {
        height: 200,
        width: '100%',
        flex: 1
    }
});

export default Item;