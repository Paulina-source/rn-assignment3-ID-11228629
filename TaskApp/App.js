import React from 'react';
const profileImage = require('./assets/profilepic.png');
const filterObject = require('./assets/filter.jpg');
const workingWoman = require('./assets/working.png');
const deskwoman = require('./assets/learning.png');
const coder = require('./assets/coder.jpg');
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';


const App = () => {
  const categories = [
    { title: 'Exercise', tasks: '12 Tasks', image: workingWoman },
    { title: 'Study', tasks: '12 Tasks', image: deskwoman },
    { title: 'Code', tasks: '8 Tasks', image: coder },
    { title: 'Groceries', tasks: '5 Tasks', image: 'https://via.placeholder.com/100' },
    { title: 'Cooking', tasks: '10 Tasks', image: 'https://via.placeholder.com/100' },
    { title: 'Work', tasks: '7 Tasks', image: 'https://via.placeholder.com/100' },
    { title: 'Leisure', tasks: '6 Tasks', image: 'https://via.placeholder.com/100' },
    { title: 'Friends and Family', tasks: '9 Tasks', image: 'https://via.placeholder.com/100' },
  ];




  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>Hello, Devs</Text>
          <Text style={styles.subHeaderText}>14 tasks today</Text>
        </View>
        <TouchableOpacity style={styles.profileIcon}>
          <Image
            source={profileImage}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity style={styles.filterIcon}>
          <Image
            source={filterObject} 
            style={styles.filterImage}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionHeader}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} 
      style={styles.categories}>
      {categories.map((category, index) => (
        <View key={index} style={styles.category}>
          <View style={styles.categoryTextContainer}>
            <Text style={styles.categoryText}>{category.title}</Text>
            <Text style={styles.categoryTasks}>{category.tasks}</Text>
          </View>
          <Image
            source={category.image}
            style={styles.categoryImage}
          />
        </View>
      ))}
    </ScrollView>
    <View style={styles.ongoingTasks}>
      <Text style={styles.sectionHeader}>Ongoing Task</Text>
      <TouchableOpacity style={styles.task}>
        <Text style={styles.taskText}>Mobile App Development</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.task}>
        <Text style={styles.taskText}>Web Development</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.task}>
        <Text style={styles.taskText}>Push Ups</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  padding: 16,
  backgroundColor: '#FAF3EB',
  paddingTop: 60,
},
header: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 30,
},
headerText: {
  fontSize: 32,
  fontWeight: 'bold',
},
subHeaderText: {
  fontSize: 14,
  color: '#888',
},
profileIcon: {
  width: 55,
  height: 55,
  borderRadius: 25,
  overflow: 'hidden',
},
profileImage: {
  width: '100%',
  height: '100%',
},
searchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 40,
},
searchInput: {
  flex: 1,
  height: 50,
  backgroundColor: '#FFF',
  borderRadius: 16,
  paddingHorizontal: 8,
  marginRight: 20,
},
filterIcon: {
  width: 50,
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F0522F',
  borderRadius: 16,
},
filterImage: {
  width: 50,
  height: 50,
},
categories: {
  flexDirection: 'row',
    marginBotto
} })