import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';

const App = () => {
  const categories = [
    { title: 'Exercise', tasks: '12 Tasks', image: 'https://via.placeholder.com/100' },
    { title: 'Study', tasks: '12 Tasks', image: 'https://via.placeholder.com/100' },
    { title: 'Work', tasks: '8 Tasks', image: 'https://via.placeholder.com/100' },
    { title: 'Groceries', tasks: '5 Tasks', image: 'https://via.placeholder.com/100' },
    { title: 'Cooking', tasks: '10 Tasks', image: 'https://via.placeholder.com/100' },
    { title: 'Cleaning', tasks: '7 Tasks', image: 'https://via.placeholder.com/100' },
    { title: 'Reading', tasks: '6 Tasks', image: 'https://via.placeholder.com/100' },
    { title: 'Yoga', tasks: '9 Tasks', image: 'https://via.placeholder.com/100' },
  ];

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView></SafeAreaView>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>Hello, Devs</Text>
          <Text style={styles.subHeaderText}>14 tasks today</Text>
        </View>
        
        <TouchableOpacity style={styles.profileIcon}>
          <Image
            source={require('./assets/profilepic.png')} 
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity style={styles.filterIcon}>
          <Image
            source={{ uri: 'https://via.placeholder.com/20' }} // Replace with the URL of the filter icon
            style={styles.filterImage}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.ongoingTasksHeader}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        {categories.map((category, index) => (
          <View key={index} style={styles.category}>
            <Image
              source={{ uri: category.image }}
              style={styles.categoryImage}
            />
            
            <Text style={styles.categoryText}>{category.title}</Text>
            <Text style={styles.categoryTasks}>{category.tasks}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.ongoingTasks}>
        <Text style={styles.ongoingTasksHeader}>Ongoing Task</Text>
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 16,
    color: '#888',
  },
  profileIcon: {
    width: 50,
    height: 50,
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
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  filterIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF7043',
    borderRadius: 8,
  },
  filterImage: {
    width: 20,
    height: 20,
  },
  categories: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  category: {
    width: 120,
    alignItems: 'center',
    backgroundColor: '#FFF',
    padd

: 16,
    borderRadius: 8,
    elevation: 2,
    marginRight: 16,
  },
  categoryImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  categoryTasks: {
    fontSize: 14,
    color: '#888',
  },
  ongoingTasks: {
    marginBottom: 16,
  },
  ongoingTasksHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  task: {
    backgroundColor: '#FFF',
    padding: 60,
    borderRadius: 8,
    marginBottom: 8,
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
  },
});

export default App;