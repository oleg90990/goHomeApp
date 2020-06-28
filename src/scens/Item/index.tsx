import React, { useState } from 'react';
import { Left, Body, Content, View, List, ListItem, Spinner } from 'native-base';
import { SliderBox } from "react-native-image-slider-box";
import { StyleSheet, Text, Linking } from "react-native";
import { IItemProps } from "./types";
import { getColorsByIds, getBreedById, getAnimalById } from "../../store/dictionaries/getters";
import Actions from './components/Actions';
import { getLabelSterilization, getLabelYesNo, getLabelAge, getLabelCity } from '../../helpers/Labels';
import API from '../../api/apiAds';
import { toEditPost } from '../../utilites/appNavigation';

import { connect } from 'react-redux';
import { IState } from '../../store/types';

const Item: React.FC<IItemProps> = ({
        item,
        getColorsByIds,
        getBreedById,
        getAnimalById
    }) => {
        const useColors = getColorsByIds(item.colors);
        const useBreed = getBreedById(item.breed_id, item.animal_id);
        const useAnimal = getAnimalById(item.animal_id);
        const [loading, setLoading] = useState(false);
        const [activeItem, setActive] = useState(item.active); 

        function toPublish(active: boolean) {
            API.publish(item.id, active)
                .then(({ data }) => {
                    setActive(data.active);
                });
        }

        function toCall() {
            Linking.openURL(`tel:${item.phone}`);
        }

        function toEdit() {
            toEditPost({ item });
        }

        return ( !loading ? 
            <Content>
                <SliderBox sliderBoxHeight={300} images={item.images} />
                <View padder>
                    <Actions
                        user_id={item.user_id}
                        active={activeItem}
                        toPublish={toPublish}
                        toEdit={toEdit}
                        toCall={toCall}
                    />

                    <Text style={styles.Title}>
                        { item.title }
                    </Text>

                    <List style={{ marginLeft: -20 }}>
                        <ListItem>
                            <Left>
                                <Text style={styles.Text}>
                                    Город:
                                </Text>
                            </Left>
                            <Body>
                                <Text style={styles.Text}>
                                    { getLabelCity(item.city) }
                                </Text>
                            </Body>
                        </ListItem>
                        {( useBreed ? 
                        <ListItem>
                            <Left>
                                <Text style={styles.Text}>
                                    Порода:
                                </Text>
                            </Left>
                            <Body>
                                <Text style={styles.Text}>
                                    { useBreed.name }
                                </Text>
                            </Body>
                        </ListItem> : null)}
                        <ListItem>
                            <Left>
                                <Text style={styles.Text}>
                                    Возраст:
                                </Text>
                            </Left>
                            <Body>
                                <Text style={styles.Text}>
                                    { item.age } { getLabelAge(item.age) }
                                </Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text style={styles.Text}>
                                    Пол:
                                </Text>
                            </Left>
                            <Body>
                                <Text style={styles.Text}>
                                    { useAnimal ? useAnimal[item.gender] : 'Неизвестно' }
                                </Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text style={styles.Text}>
                                    { getLabelSterilization(item.gender) }:
                                </Text>
                            </Left>
                            <Body>
                                <Text style={styles.Text}>
                                    { getLabelYesNo(item.sterilization) }
                                </Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text style={styles.Text}>
                                    Цвет:
                                </Text>
                            </Left>
                            <Body>
                                <View style={styles.Colors}>
                                    { useColors.map((color, key) => {
                                        return <View key={key} style={[styles.Color, { backgroundColor: color.value }]} />
                                    })}
                                </View>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text style={styles.Text}>
                                    { item.content }
                                </Text>
                            </Body>
                        </ListItem>
                    </List>
                </View>
            </Content> : <Spinner />
        );
};

const styles = StyleSheet.create({
    Title: {
        fontSize: 22
    },
    Colors: {
        display: 'flex',
        flexDirection: 'row'
    },
    Color: {
        width: 25,
        height: 25,
        marginRight: 10
    },
    Text: {
        fontSize: 16
    }
});

const mapStateToProps = (state: IState) => {
    return {
        getColorsByIds: getColorsByIds(state),
        getBreedById: getBreedById(state),
        getAnimalById: getAnimalById(state)
    };
};

export default connect(mapStateToProps, {})(Item);