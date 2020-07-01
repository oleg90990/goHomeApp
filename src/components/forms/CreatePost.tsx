import React, { useEffect, useState } from 'react';
import { StyleSheet } from "react-native";
import { Form,
  Item,
  Input,
  Picker,
  Label,
  Textarea,
  View,
  Button,
  Text,
  Spinner,
  Body,
  Card,
  CardItem,
  List,
  ListItem,
  Image
} from 'native-base';

import ColorsSelect from '../../components/elements/ColorsSelect';
import AgeSelect from '../../components/elements/AgeSelect';
import GenderSelect from '../../components/elements/GenderSelect';
import SterilizationCastrationSelect from '../elements/SterilizationCastrationSelect';
import ImageSelect from '../elements/ImagesSelect';

import { connect } from 'react-redux';
import { IState } from '../../store/types';
import { IStateDictionariesReducer, IDictionaryItem } from '../../store/dictionaries';
import { IUser } from '../../store/user';
import { getBreedsByAnimal } from '../../store/dictionaries/getters';
import { Gender, YesNo } from '../../enum/Form';
import { Social } from '../../enum/Social';
import { getLabelSterilization } from '../../helpers/Labels';
import { toItem } from '../../utilites/appNavigation';
import { IItem } from '../../scens/Item/types';
import { ICityItem } from '../../api/apiDictionaries';
import CitySelect from '../elements/CitySelect';
import Api from '../../api/apiAds';
import PhoneInput from '../elements/PhoneInput';

import CheckBox from '@react-native-community/checkbox';

interface IValues extends Omit<IItem, 'user_id' | 'active'> {

}

interface IProps extends IStateDictionariesReducer {
  getBreedsByAnimal: (animal: number) => IDictionaryItem[],
  values?: IValues,
  user: IUser
}

const CreatePost: React.FC<IProps> = ({ getBreedsByAnimal, animals, values, user }) => {
    const defaultValues = Object.assign({
      id: 0,
      title: '',
      images: [],
      content: '',
      age: 1,
      colors: [],
      animal_id: 1,
      breed_id: 1,
      phone: '',
      gender: Gender.none,
      sterilization: YesNo.none,
      city: user.city
    }, values ? values : {});
  
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState(defaultValues.title);
    const [animal_id, setAnimal] = useState(defaultValues.animal_id);
    const [colors, setColors] = useState<number[]>(defaultValues.colors);
    const [age, setAge] = useState<number>(defaultValues.age);
    const [breed_id, setBreed] = useState(defaultValues.breed_id);
    const [phone, setPhone] = useState(user.mobile);
    const [content, setContent] = useState(defaultValues.content);
    const [gender, setGender] = useState<Gender>(defaultValues.gender);
    const [sterilization, setSterilization] = useState<YesNo>(defaultValues.sterilization);
    const [images, setImages] = useState<string[]>(defaultValues.images);
    const [city, setCity] = useState<ICityItem | undefined>(defaultValues.city);
    const [socials, setSocials] = useState<Social[]>([Social.vk]);

    function onSave() {
      setLoading(true);
      function callback(item?: IItem) {
        setLoading(false)
        if (item) {
          toItem({ item });
        }
      }

      const {
        id
      } = defaultValues;

      if (id) {
        update(id, callback);
      } else {
        create(callback);
      }
    }

    function create(callback: (item?: IItem) => void) {
      Api.create({
        title,
        images,
        content,
        age,
        colors,
        animal_id,
        breed_id,
        phone,
        gender,
        sterilization,
        city_id: city ? city.id : undefined,
        socials
      }).then(({ data }) => {
        callback(data);
      }).catch(() => {
        callback();
      });
    }

    function update(id: number, callback: (item?: IItem) => void) {
      Api.update({
        id,
        title,
        images,
        content,
        age,
        colors,
        animal_id,
        breed_id,
        phone,
        gender,
        sterilization,
        city_id: city ? city.id : undefined,
        socials
      }).then(({ data }) => {
        callback(data);
      }).catch(() => {
        callback();
      });
    }

    function onChangeSocial(id: Social) {
      const index = socials.indexOf(id);

      if (index >= 0) {
        socials.splice(index, 1);
      } else {
        socials.push(id);
      }

      setSocials([...socials]);
    }

    return ( !loading ? 
      <Form>
        <Item stackedLabel style={styles.Item}>
          <Label>Город</Label>
          <CitySelect
            onSelected={setCity}
            includedRegins={false}
            value={city}
          />
        </Item>
        <Item stackedLabel style={styles.Item}>
          <Label>
            Заголовок
          </Label>
          <Input
            value={title}
            onChangeText={setTitle}
          />
        </Item>
        <Item stackedLabel style={styles.Item}>
          <Label>
            Животное
          </Label>
          <Picker
            style={{width: '100%'}}
            mode="dropdown"
            onValueChange={setAnimal}
            selectedValue={animal_id}
          >
            {( animals.map(({ id, name }, index) => {
              return <Picker.Item label={name} value={id} key={index} />;
            }) )}
          </Picker>
        </Item>
        <Item stackedLabel style={styles.Item}>
          <Label>
            Порода
          </Label>
          <Picker
            style={{width: '100%'}}
            onValueChange={setBreed}
            selectedValue={breed_id}
          >
            { getBreedsByAnimal(animal_id).map(({ name, id }, index) => {
              return <Picker.Item key={index} label={name} value={id} />
            })}
          </Picker>
        </Item>
        <Item stackedLabel style={styles.Item}>
          <Label>
            Пол
          </Label>
          <GenderSelect
            value={gender}
            onChange={setGender}
            animal={animal_id}
          />
        </Item>
        <Item stackedLabel style={styles.Item}>
          <Label>
             { getLabelSterilization(gender) }
          </Label>
          <SterilizationCastrationSelect
            value={sterilization}
            onChange={setSterilization}
          />
        </Item>
        <Item stackedLabel style={styles.Item}>
          <Label>
            Цвет
          </Label>
          <View style={styles.ColorsSelect}>
            <ColorsSelect 
              value={colors}
              onChange={setColors}
            />
          </View>
        </Item>
        <Item stackedLabel style={styles.Item}>
          <Label>
            Возраст
          </Label>
          <AgeSelect
            style={{width: '100%'}}
            value={age}
            onChange={setAge}
          />
        </Item>
        <Item stackedLabel style={styles.Item}>
          <Label>
            Моб. номер
          </Label>
            <PhoneInput
            value={phone}
            onChange={() => {}}
            disabled={true}
          />
        </Item>
        <Item style={[styles.Item, styles.ViewItem]}>
          <Textarea
            underline
            bordered={false}
            rowSpan={8}
            value={content}
            onChangeText={setContent}
            style={{width: '100%'}}
            placeholder="Описание"
          />
        </Item>
        <View style={styles.ViewItem}>
          <ImageSelect value={images} onChange={setImages} />
        </View>
        <Card style={styles.ViewItem}>
          <CardItem>
            <Body>
              <List>
                <ListItem style={styles.Checkbox}>
                  <CheckBox
                    value={socials.indexOf(Social.vk) >= 0} 
                    onValueChange={() => onChangeSocial(Social.vk)}
                  />
                  <Text>
                    { defaultValues.id ? 'Отредактировать в группах vk' : 'Опубликовать в группах vk' }
                  </Text>
                </ListItem>
              </List>
            </Body>
          </CardItem>
        </Card>
        <View style={styles.ViewItem}>
          <Button block primary onPress={onSave}>
            <Text> { defaultValues.id ? 'Отредактировать' : 'Создать' }</Text>
          </Button>
        </View>
      </Form> : <Spinner />
  );
};

const styles = StyleSheet.create({
  SocialIcon: {
    height: 20
  },
  Checkbox: {
    flexDirection: "row",
    marginLeft: 0
  },
  Title: {
    fontSize: 20,
    marginBottom: 10
  },
  ColorsSelect: {
    margin: 15,
    paddingLeft: 10,
    display: 'flex',
    width: '100%'
  },
  Item: {
    marginLeft: 0
  },
  ViewItem: {
    marginBottom: 20
  }
});

const mapStateToProps = (state: IState) => {
  const dictionaries = state.dictionaries;
  const user = state.user.user;
  return {
    ...dictionaries,
    user,
    getBreedsByAnimal: getBreedsByAnimal(state)
  };
};

export default connect(mapStateToProps, {})(CreatePost);