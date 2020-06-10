import React, { useEffect } from 'react';
import { StyleSheet } from "react-native";
import { Form, View, Button, Text } from 'native-base';

import { connect } from 'react-redux';
import { setAges, setAnimal, setColors, addBreed, removeBreed  } from '../../store/searchForm/actions';
import { IStateSearchFormReducer, AgeState } from '../../store/searchForm';
import { IState } from '../../store/types';

interface IProps extends IStateSearchFormReducer {

}

const Profile: React.FC<IProps> = () => {
    return (
      <Form>

      </Form>
  );
};

const styles = StyleSheet.create({

});

const mapStateToProps = ({ searchForm }: IState) => {
  return searchForm;
};

export default connect(mapStateToProps, {

})(Profile);