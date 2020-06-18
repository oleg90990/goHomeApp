import React, { useState, useEffect } from 'react';
import { StyleSheet } from "react-native";
import { Content, Spinner, View } from 'native-base';
import { ScrollView } from "react-native";
import Item from './components/Item';
import { IItemsProps } from "./types";
import ApiItems from "../../api/apiAds";
import { Sortby } from '../../enum/Form';
import { IItem } from '../Item/types';
import RNPickerSelect from 'react-native-picker-select';

import { connect } from 'react-redux';
import { IState } from '../../store/types';

const sortByItems = [
    { label: 'По возрасту', value: Sortby.age },
    { label: 'По дате', value: Sortby.date },
];

const Items: React.FC<IItemsProps> = ({ searchForm }) => {
    const [sortBy, setSortBy] = useState(Sortby.date);
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState<IItem[]>([]);
    
    function loadItems() {
        setLoading(true);
        ApiItems.find(searchForm, sortBy)
            .then(({ data }) => {
                setItems(data);
                setLoading(false);
            });
    }

    useEffect(loadItems, [sortBy]);

    return (
        <Content padder>
            <View>
                <RNPickerSelect
                    onValueChange={setSortBy}
                    items={sortByItems}
                    value={sortBy}
                />
            </View>
            {( loading ? ( <View style={styles.Spinner}><Spinner/></View> ): 
                <ScrollView>
                    {( items.map((item: any, index) => {
                        return <Item key={index} item={item} />
                    }))}
                </ScrollView> )}
        </Content>
    );
};

const styles = StyleSheet.create({
    Spinner: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        height: 600
    }
});

const mapStateToProps = (state: IState) => {
    return state;
};

export default connect(mapStateToProps, {})(Items);