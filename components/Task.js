import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemleft}>
        <TouchableOpacity style={styles.box}></TouchableOpacity>
        <View>
          <Text style={styles.text}>{data}</Text>
        </View>
      </View>
      <View style={styles.icon}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 30,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemleft: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#55BCF6',

    width: 24,
    height: 24,
    opacity: 0.5,
    borderRadius: 5,
  },
  text: {
    marginLeft: 15,
    maxWidth: '90%',
  },
  icon: {
    borderWidth: 2,
    borderColor: '#55BCF6',
    borderRadius: 5,
    width: 12,
    height: 12,
  },
});
export default Task;
