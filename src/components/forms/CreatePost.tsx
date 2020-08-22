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
  CardItem
} from 'native-base';

import Toast from '../../utilites/toastr';
import ColorsSelect from '../../components/elements/ColorsSelect';
import AgeSelect from '../../components/elements/AgeSelect';
import GenderSelect from '../../components/elements/GenderSelect';
import SterilizationCastrationSelect from '../elements/SterilizationCastrationSelect';
import ImageSelect from '../elements/ImagesSelect';
import SocialSelect from '../elements/SocialSelect';
import { IStateDictionaries, IDictionaryItem, Gender, YesNo, IUser } from 'friendshome-api';
import { connect } from 'react-redux';
import { IState } from '../../store/types';
import { getBreedsByAnimal } from '../../store/dictionaries/getters';
import { Social } from '../../enum/Social';
import { getLabelSterilization } from '../../helpers/Labels';
import { toItem } from '../../utilites/appNavigation';
import { ICityItem } from 'friendshome-api';
import { adsApi } from '../../api';
import CitySelect from '../elements/CitySelect';
import PhoneInput from '../elements/PhoneInput';

interface IProps extends IStateDictionaries {
  getBreedsByAnimal: (animal: number) => IDictionaryItem[];
  user: IUser;
}

const CreatePost: React.FC<IProps> = ({ getBreedsByAnimal, animals, user }) => {
  const defaultValues = {
    id: 0,
    title: '',
    images: [],
    content: '',
    age: 1,
    colors: [],
    animal_id: 1,
    breed_id: 1,
    gender: Gender.none,
    sterilization: YesNo.none,
    city: user.city
  };
  
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(defaultValues.title);
  const [animal_id, setAnimal] = useState(defaultValues.animal_id);
  const [colors, setColors] = useState<number[]>(defaultValues.colors);
  const [age, setAge] = useState<number>(defaultValues.age);
  const [breed_id, setBreed] = useState(defaultValues.breed_id);
  const [content, setContent] = useState(defaultValues.content);
  const [gender, setGender] = useState<Gender>(defaultValues.gender);
  const [sterilization, setSterilization] = useState<YesNo>(defaultValues.sterilization);
  const [images, setImages] = useState<string[]>(defaultValues.images);
  const [city, setCity] = useState<ICityItem | undefined>(defaultValues.city);
  const [socials, setSocials] = useState<Social[]>([Social.vk]);

  function onSave() {
    if (city) {
      setLoading(true);
      adsApi.create({
        title,
        images,
        content,
        age,
        colors,
        animal_id,
        breed_id,
        gender,
        sterilization,
        city_id: city.id,
        socials
      }).then(({ data }) => {
        setLoading(false)
        toItem({ item: data });
      }).catch(() => [
        setLoading(false)
      ]);
    } else {
      Toast.error('Выберите пожалуйста город');
    }
  }

  const isShowVkPublish = () => {
    return user.vkGroups.length > 0;
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
      { isShowVkPublish() ? <Card style={styles.ViewItem}>
        <CardItem>
          <Body>
            <SocialSelect
              value={socials}
              onChange={setSocials}
              prefix={'Опубликовать'}
              vk={user.vkGroups.length > 0}
            />
          </Body>
        </CardItem>
      </Card> : null }
      <View style={styles.ViewItem}>
        <Button block primary onPress={onSave}>
          <Text> { 'Создать' }</Text>
        </Button>
      </View>
    </Form> : <Spinner />
  );
};

const styles = StyleSheet.create({
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