import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import ImagePicker, { ImagePickerResponse } from 'react-native-image-picker';
import { View, Button, Text, Icon } from 'native-base';

interface IImagesSelectProps  {
}

var options = {
  title: 'Выберите изображение',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const ImagesSelect: React.FC<IImagesSelectProps> = () => {
    const [resources, setResources] = useState<ImagePickerResponse[]>([]);

    function addResource(resource: ImagePickerResponse) {
      setResources([...resources, resource]);
    }

    function removeResource(index: number) {
      const items = [...resources];
      items.splice(index, 1);
      setResources(items);
    }

    function selectFile() {
      ImagePicker.showImagePicker(options, (res: ImagePickerResponse) => {
        if (res.uri) {
          addResource(res);
        }
      });
    };

    return (
        <View>
          <View style={styles.Images}>
            {( resources.map(({ uri }, key) => {
                return <View key={key}>
                  <Icon active name='close' onPress={() => removeResource(key)} style={styles.IconImg} />
                  <Image source={{ uri }} style={styles.Img} />
                </View>
              }) )}
          </View> 
          <Button block  onPress={selectFile} style={styles.AddBtn}  >
              <Text>Добавить файл</Text>
          </Button>       
        </View>
      );
};

const styles = StyleSheet.create({
  AddBtn: {
    width: 180
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
  IconImg: {
    position: 'absolute',
    zIndex: 1,
    right: 15,
    top: 5
  }
});

export default ImagesSelect;