import React, { useState, useEffect } from 'react';
import { StyleSheet } from "react-native";
import { Content, Spinner, View } from 'native-base';
import { ScrollView, FlatList, RefreshControl, Text } from "react-native";
import Item from './components/Item';
import { IItemsProps } from "./types";
import ApiItems from "../../api/apiAds";
import { Sortby } from '../../enum/Form';
import { IItem } from '../Item/types';
import RNPickerSelect from 'react-native-picker-select';

import { connect } from 'react-redux';
import { IState } from '../../store/types';

const Items: React.FC<IItemsProps> = ({ searchForm }) => {
    const [sortBy, setSortBy] = useState(Sortby.date);
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState<IItem[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [lastPage, setLastPage] = useState(2);

    const sortByItems = [
      { label: 'По возрасту', value: Sortby.age },
      { label: 'По дате', value: Sortby.date },
    ];

    function loadNextItems() {
        setLoading(true);

        ApiItems.find(searchForm, sortBy, currentPage + 1)
            .then(({ data }) => {
              setItems([...items, ...data.items]);
              setCurrentPage(data.currentPage);
              setLastPage(data.lastPage);
              setLoading(false);
            });
    }

    useEffect((loadNextItems), []);

    useEffect(() => {
      setCurrentPage(0);
      setLastPage(2);
      setItems([]);
      loadNextItems();

      () => {
        setCurrentPage(0);
        setLastPage(2);
        setItems([]);
      }
    }, [sortBy]);

    return (
      <View padder>
        <FlatList
          data={items}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={
            (loading ? <Spinner/>: null)
          }
          ListHeaderComponent={
            false ? <RNPickerSelect
              onValueChange={setSortBy}
              items={sortByItems}
              value={sortBy}
            /> : null
          }
          onEndReachedThreshold={0.4}
          onEndReached={() => {
            if (!loading && lastPage != currentPage) {
              loadNextItems();
            }
          }}
        />
      </View>
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