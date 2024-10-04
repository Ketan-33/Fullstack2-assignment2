import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const wishlistData = [
  {
    id: '1',
    title: 'Aero Sport Infinity Pro',
    category: 'Footwear',
    price: 'Rp400.000',
    image: require('../assets/pic1.png'),
  },
  {
    id: '2',
    title: 'Sport+ Invincible Pro',
    category: 'Footwear',
    price: 'Rp389.000',
    image: require('../assets/pic2.png'),
  },
  {
    id: '3',
    title: 'Sport Sneakers+ Blue',
    category: 'Footwear',
    price: 'Rp200.000',
    image: require('../assets/pic3.png'),
  },
  {
    id: '4',
    title: 'Sport+ Invincible Max',
    category: 'Footwear',
    price: 'Rp399.000',
    image: require('../assets/pic4.png'),
  },
];

export default function WishlistScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productCategory}>{item.category}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Wishlist</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="cart-outline" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={wishlistData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 15,
  },
  listContainer: {
    justifyContent: 'space-between',
  },
  productCard: {
    flex: 1,
    margin: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productCategory: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
});
