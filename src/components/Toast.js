import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ToastAndroid } from 'react-native';
const Toast = ({ visible, message }) => {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50
    );
    return null;
  }
  return null;
};

export default Toast;