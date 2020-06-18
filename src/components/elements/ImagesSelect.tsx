import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import ImagePicker, { ImagePickerResponse } from 'react-native-image-picker';
import { View, Button, Text, Icon } from 'native-base';

interface IImagesSelectProps  {
  onChange: (value: string[]) => void,
  value: string[],
}

var options = {
  title: 'Выберите изображение',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const ImagesSelect: React.FC<IImagesSelectProps> = ({value, onChange}) => {
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
      ImagePicker.showImagePicker(options, ({data}: ImagePickerResponse) => {
        if (data) {
          addResource(data);
        }
      });
    };

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
                <Image source={{ uri: 'data:image/jpeg;base64,' + uri }} style={styles.Img} />
              </View>
            }) )}
        </View> 
        <Button block onPress={selectFile} style={styles.AddBtn}  >
            <Text>Добавить файл</Text>
        </Button>       
      </View>
    );
};

const styles = StyleSheet.create({
  AddBtn: {
    width: 220,
    marginTop: 10
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
    backgroundColor: '#3FB56F',
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