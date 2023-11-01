import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';

const BookDetailsScreen = ({ route }) => {
  const { book } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: book.image_url }} style={styles.bookImage} />
      <View style={styles.bookInfo}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.authors}>Author: {book.authors}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>Rating:</Text>
          <FlatList
            data={[...Array(5).keys()]}
            horizontal
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.starContainer}
                activeOpacity={0.7}
                onPress={() => alert(`You rated this book ${item + 1} stars`)}
              >
                <Image
                  source={
                    item < Math.floor(book.rating)
                      ? require('./assets/star_filled.png')
                      : require('./assets/star_outline.png')
                  }
                  style={styles.star}
                />
              </TouchableOpacity>
            )}
          />
        </View>
        <Text style={styles.description}>{book.description}</Text>
      </View>
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tabItem} onPress={() => alert('Tab 1 pressed')}>
          <Text style={styles.tabText}>Summary</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => alert('Tab 2 pressed')}>
          <Text style={styles.tabText}>Reviews</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => alert('Add to Favorites button pressed')}>
        <Text style={styles.buttonText}>Add to Favorites</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  bookImage: {
    width: '100%',
    height: 550,
    marginBottom: 16,
  },
  bookInfo: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  authors: {
    fontSize: 18,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rating: {
    fontSize: 18,
    marginRight: 8,
  },
  starContainer: {
    marginRight: 4,
  },
  star: {
    width: 20,
    height: 20,
  },
  description: {
    fontSize: 16,
    marginTop: 16,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  tabItem: {
    padding: 8,
  },
  tabText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default BookDetailsScreen;
