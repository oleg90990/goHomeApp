import React from 'react';
import { CardItem, Text , Card, Left, Body } from 'native-base';
import { Image, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { toItem as toItemScen  } from '../../../utilites/appNavigation';
import { IItemState } from '../../Item';

export interface IItemListInterface {
    item: IItemState
}

const Item: React.FC<IItemListInterface> = (props) => {
    const { item } = props;
    
    function toItem() {
        toItemScen(item);
    }

    return (
        <TouchableNativeFeedback onPress={toItem}>
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