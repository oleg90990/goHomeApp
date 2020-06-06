import React, { useState } from 'react';
import { StyleSheet, Text } from "react-native";
import { Container, Content, Form, View, Button } from 'native-base';
import { Animal } from '../../enum/Form';
import AnimalsSelectWidgets from '../widgets/AnimalsSelectWidgets';
import { toItems } from '../../utilites/appNavigation'
import { IItemsProps } from '../../scens/Items/types';

import ColorWidget from '../widgets/ColorWidget';
import AgeWidget from '../widgets/AgeWidget';

import { RootState } from '../../redux';
import { addText } from '../../redux/search';
import { connect } from 'react-redux';

const mapStateToProps = (state: RootState) => ({
  test: state.searchForm.test,
});

const mapDispatchToProps = { addText };

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;


// import { connect } from "react-redux";
// import { Inventory } from "../../redux/inventory/types";
// import { fetchRequest } from "../../redux/inventory/actions";
// import { ThunkDispatch } from "redux-thunk";
// import { AnyAction } from "redux";
// import { ApplicationState } from "../../redux/types";

const Search: React.FC = (props) => {
  const [data, setData] = useState<IItemsProps>({
    animal: Animal.dog,
    ages: {
      from: 1,
      to: 3
    },
    colors: []
  });

  let {
    animal,
    ages,
    colors
  } = data;

  function toFind() {
    toItems(data);
  }

  return (
    <Container>
        <Content padder>
            <Form>
              <View style={styles.Item}>
                <AnimalsSelectWidgets
                  onChange={(animal) => setData({...data, animal}) }
                  value={animal}
                />
              </View>
              <View style={styles.Item}>
                <AgeWidget
                  onChange={(ages) => setData({...data, ages}) }
                  value={ages}
                />
              </View>
              <View style={styles.Item}>
                <ColorWidget
                  onChange={(colors) => setData({...data, colors}) }
                  value={colors}
                />
              </View>
              <View style={styles.ItemBtn}>
                <Button style={styles.Btn} onPress={toFind}>
                  <Text style={styles.ButtonText}>Найти</Text>
                </Button>
              </View>
            </Form>
        </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 20,
    marginBottom: 10
  },
  Item: {
    marginBottom: 5,
    paddingBottom: 0
  },
  Animal:{
    marginTop: 10
  },
  ItemBtn: {
    marginTop: 5
  },
  Btn: {
    justifyContent: 'center'
  },
  ButtonText: {
    color: 'white'
  }, 
});

// const mapStateToProps = ({ inventory }: ApplicationState) => ({
//   loading: inventory.loading,
//   errors: inventory.errors,
//   data: inventory.data
// });

// const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
//   return {
//     fetchRequest: () => {
//       dispatch(fetchRequest());
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Search);

export const Auth = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);