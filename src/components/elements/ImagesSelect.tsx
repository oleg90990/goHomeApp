import React, { useState } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import ImagePicker, { ImagePickerResponse } from 'react-native-image-picker';
import { View, Icon, Text } from 'native-base';
import { Color } from '../../enum/Color';

interface IImagesSelectProps  {
  onChange: (value: string[]) => void,
  value: string[],
}

var options = {
  title: 'Выберите изображение',
  cancelButtonTitle: 'Отмена',
  takePhotoButtonTitle: 'Сделать фото',
  chooseFromLibraryButtonTitle: 'Выбрать из галереи',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const ImagesSelect: React.FC<IImagesSelectProps> = ({ value, onChange }) => {
    value = value ? value : [];

    function addResource(uri: string) {
      onChange([...value, uri]);
    }

    function removeResource(index: number) {
      let images = [...value];
      images.splice(index, 1);
      onChange(images);
    }

    function selectFile() {
      ImagePicker.showImagePicker(options, ({ data }: ImagePickerResponse) => {
        if (data) {
          addResource(data);
        }
      });
    }

    function getUri(uri: string) {
      if (uri.indexOf("http") >= 0) {
        return uri;
      } else {
        return 'data:image/jpeg;base64,' + uri;
      }
    }

    return (
      <View>
        <View style={styles.Images}>
          {( value.map((uri, key) => {
              return <View key={key}>
                <Icon
                  active
                  name='close'
                  color={'white'}
                  style={styles.Icon}
                  onPress={() => removeResource(key)}
                />
                <Image source={{ uri: getUri(uri) }} style={styles.Img} />
              </View>
            }) )}

          <TouchableOpacity onPress={selectFile} > 
            <View style={styles.AddImage}>
                <Icon
                  style={styles.AddImageIcon}
                  active
                  name='camera'
                  color={'white'}
                />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  AddBtn: {
    width: 220,
    marginTop: 10
  },
  AddImageIcon: {
    textAlign: 'center',
    color: Color.theme,
    fontSize: 30
  },
  AddImage: {
    display: 'flex',
    width: 80,
    height: 80,
    borderWidth: 3,
    borderColor: Color.theme,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Img: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  Images: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  Icon: {
    color: 'white',
    fontSize: 20,
    backgroundColor: Color.theme,
    position: 'absolute',
    zIndex: 1,
    right: 15,
    top: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 6,
    paddingVertical: 2
  }
});

export default ImagesSelect;