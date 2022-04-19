import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [tasklist, setTaskList] = useState([]);
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskList([...tasklist, task]);
    setTask(null);
  };

  const handleDeleteTask = (key) => {
    setTaskList((prev) => prev.filter((item) => item !== key));
  };

  return (
    <View style={styles.container}>
      {/* Main Heading */}
      <View style={styles.tasksWrappper}>
        <Text style={styles.sectionTitle}>Today's Task </Text>

        <View style={styles.items}>
          {/* here we will list all tasks */}
          {tasklist.map((items, index) => (
            <TouchableOpacity onPress={() => handleDeleteTask(items)}>
              <Task key={index} data={items} delete={handleDeleteTask} />
            </TouchableOpacity>
          ))}
        </View>
        {/* 
        Create A Task */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'padding' : 'height'}
          style={styles.writeTaskWrapper}
        >
          <TextInput
            style={styles.input}
            placeholder="Write a Task"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.add}> + </Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrappper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {},
  writeTaskWrapper: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    bottom: -430,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    marginLeft: 24,
    paddingVertical: 15,
    borderRadius: 30,
    borderColor: '#C0C0C0',
    width: 300,
    paddingHorizontal: 15,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  addWrapper: {
    marginLeft: 12,
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  add: {
    paddingLeft: 18,
    paddingTop: 14,
  },
});
