import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const BottomButton = ({ navigation, image, navigateTo, navigationValue }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(`${navigateTo}`, { id: navigationValue })}
      // hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      style={styles.create}
    >
      <View style={{ padding: 10 }}>
        {image}
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  create: {
    position: "absolute",
    bottom: 25,
    right: 20
  }
})



export default BottomButton;