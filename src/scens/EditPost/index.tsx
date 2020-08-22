import React, { useEffect } from 'react';
import { StyleSheet } from "react-native";
import { IEditPostProps } from "./types";
import { Content } from 'native-base';
import EditPostForm from '../../components/forms/EditPost';

const EditPost: React.FC<IEditPostProps> = ({ item }) => {
  return (
    <Content padder>
      <EditPostForm values={item} />
    </Content>
  );
};

// styles
const styles = StyleSheet.create({
});

export default EditPost;