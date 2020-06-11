import React, { useState, useEffect } from 'react';
import { StyleSheet } from "react-native";
import { Container, Content, Spinner, View, Text } from 'native-base';
import { IMyAdsProps } from "./types";

import { connect } from 'react-redux';
import { IState } from '../../store/types';

const MyAds: React.FC<IMyAdsProps> = () => {
    return (
        <Content padder>
            <Text>Мои объявления</Text>
        </Content>
    );
};

const styles = StyleSheet.create({
});

const mapStateToProps = (state: IState) => {
    return state;
};

export default connect(mapStateToProps, {})(MyAds);