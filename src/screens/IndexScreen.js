import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, TouchableHighlight } from 'react-native';
import { Context } from '../context/BlogContext'
import { AntDesign, Feather } from '@expo/vector-icons';
import BottomButton from '../components/BottomButton';
import Toast from '../components/Toast';
import Constants from "expo-constants";

const IndexScreen = ({ navigation }) => {
  const [visibleToast, setvisibleToast] = useState(false);
  useEffect(() => setvisibleToast(false), [visibleToast]);

  const t = () => {
    <Toast visible={visibleToast} message={messageToast} />
  }

  const { state, getBlogPosts, deleteBlogPost } = useContext(Context);
  useEffect(() => {
    setvisibleToast(true)
    // getBlogPosts();
    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });
    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View style={{ flex: 1 }} >
      <Toast visible={visibleToast} message="Loading..." />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => {
                  Alert.alert(
                    "Confirm Deletion",
                    `Want to delete blog : ${item.title}`,
                    [
                      {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                      },
                      {
                        text: "OK", onPress: () => {
                          deleteBlogPost(item.id)
                          setmessageToast("Deleted successfully")
                        }
                      }
                    ],
                    { cancelable: false }
                  );
                }
                }>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <BottomButton
        navigation={navigation}
        image={<AntDesign name="pluscircle" size={55} color="blue" />}
        navigateTo='Create'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24,
    marginRight: 5
  },
  create: {
    position: "absolute",
    bottom: 25,
    right: 20
  }
});

export default IndexScreen;