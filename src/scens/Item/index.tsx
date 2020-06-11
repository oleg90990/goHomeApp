import React from 'react';
import { Container, Content, View, List, ListItem, Button, Icon } from 'native-base';
import { SliderBox } from "react-native-image-slider-box";
import { StyleSheet, Text, Linking} from "react-native";
import { IItemProps } from "./types";
import { getColorsByIds, getBreedById } from "../../store/dictionaries/getters";

import { connect } from 'react-redux';
import { IState } from '../../store/types';

const Item: React.FC<IItemProps> = ({
        animal,
        images,
        title,
        age,
        colors,
        breed,
        content,
        phone,
        getColorsByIds,
        getBreedById
    }) => {
        const useColors = getColorsByIds(colors);
        const useBreed = getBreedById(breed, animal);

        function toCall() {
            Linking.openURL(`tel:${phone}`);
        }

        return (
            <Container>
                <Content>
                    <SliderBox sliderBoxHeight={300} images={images} />
                    <View style={[styles.ViewTitle, styles.View]}>
                        <Text style={styles.Title}>
                            { title }
                        </Text>
                    </View>
                    <List style={{ paddingRight: 20}}>
                        {( useBreed ? 
                        <ListItem>
                            <Text style={[styles.Text, styles.Label]}>
                                { `Порода:` }
                            </Text>
                            <Text style={styles.Text}>
                                { useBreed.title }
                            </Text>
                        </ListItem> : null
                        )}
                        <ListItem>
                            <Text style={[styles.Text, styles.Label]}>
                                { `Возраст:` }
                            </Text>
                            <Text style={styles.Text}>
                                { age } { 'года'}
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text style={[styles.Text, styles.Label]}>
                                { `Цвет:` }
                            </Text>
                            { useColors.map((color, key) => {
                                return <View key={key} style={[styles.Color, { backgroundColor: color.value }]} />
                            })}
                        </ListItem>
                    </List>
                    <View style={[styles.View, styles.Footer]}>
                        <Text style={[styles.Text, styles.Content]}>
                        { content }
                        </Text>

                        <Button primary block onPress={toCall}>
                            <Text style={styles.Button}>
                                Позвонить
                            </Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
};

const styles = StyleSheet.create({
    Button: {
        color: 'white'
    },
    ViewTitle: {
        marginBottom: -10
    },
    View: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    Color: {
        width: 25,
        height: 25,
        marginRight: 10
    },
    Text: {
        fontSize: 18
    },
    Label: {
        marginRight: 10
    },
    Title: {
        fontSize: 24,
        marginBottom: 0
    },
    ListItem: {
        padding: 0
    },
    Content: {
        marginBottom: 20
    },
    Footer: {
        marginBottom: 15
    }
});

const mapStateToProps = (state: IState) => {
    return {
        getColorsByIds: getColorsByIds(state),
        getBreedById: getBreedById(state),
    };
};

export default connect(mapStateToProps, {})(Item);