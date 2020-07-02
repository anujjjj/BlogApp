import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BottomButton from '../components/BottomButton'

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam('id')
  );

  return (
    <View style={{ flex: 1 }}>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
      <BottomButton
        navigation={navigation}
        image={<MaterialCommunityIcons name="pencil-circle" size={55} color="blue" />}
        navigateTo='Edit'
        navigationValue={blogPost.id}
      />
    </View>
  );
};

// ShowScreen.navigationOptions = ({ navigation }) => {
//   return {
//     headerRight: (
//       <TouchableOpacity
//         onPress={() =>
//           navigation.navigate('Edit', { id: navigation.getParam('id') })
//         }
//       >
//         <EvilIcons name="pencil" size={35} />
//       </TouchableOpacity>
//     )
//   };
// };

const styles = StyleSheet.create({});

export default ShowScreen;
