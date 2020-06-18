import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from "react-native";
import { Button, Spinner, View, Text } from 'native-base';
import { IMyAdsProps } from "./types";
import ApiItems from '../../api/apiAds';
import Item from './components/Item';
import { IItem } from '../Item/types';
import { toCreatePost } from '../../utilites/appNavigation';

const MyAds: React.FC<IMyAdsProps> = () => {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState<IItem[]>([]);

    useEffect(() => {
        ApiItems.me()
            .then(({ data }) => {
                setItems(data);
                setLoading(false);
            });
    }, []);

    return (
        <View style={{flex: 1}}>
            <View style={styles.ButtonBlock}>
                <Button block onPress={toCreatePost} >
                    <Text>Создать пост</Text>
                </Button> 
            </View>
            <ScrollView>
            {( loading ? ( <View style={styles.Spinner}><Spinner/></View> ): 
                <View style={styles.Container}>
                    {( items.map((item: any, index) => {
                        return <View key={index} style={styles.Item}>
                        <Item key={index} item={item} />
                    </View> }))}
                </View>)}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    Spinner: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    Container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch'
    },
    Item: {
        width: '50%', // is 50% of container width
        padding: 5
    },
    ButtonBlock: {
        padding: 7,
        paddingTop: 10
    },
    ScrollView: {
        flex: 1,
        backgroundColor: 'green',
    },
});

export default MyAds;