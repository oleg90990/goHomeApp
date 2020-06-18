import React, { useEffect } from 'react';
import { StyleSheet } from "react-native";
import { IEditPostProps } from "./types";
import { Content } from 'native-base';
import CreatePostForm from '../../components/forms/CreatePost';

const EditPost: React.FC<IEditPostProps> = ({ item }) => {
    return (
      <Content padder>
        <CreatePostForm values={item} />
      </Content>
    );
};

// styles
const styles = StyleSheet.create({
});

export default EditPost;