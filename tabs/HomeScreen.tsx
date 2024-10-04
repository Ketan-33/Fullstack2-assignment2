import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.topBar}>
        <Text style={styles.logo}>Sport Shoes</Text>
        <View style={styles.topBarIcons}>
          <TouchableOpacity style={styles.cartIcon} onPress={() => navigation.navigate('WishlistScreen' as never)}>
            <Icon name="heart-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartIcon}>
            <Icon name="cart-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartIcon} onPress={() => navigation.navigate('NotificationScreen' as never)}>
            <Icon name="notifications-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search items"
        />
                <TouchableOpacity style={styles.topUpButton}>
                <Icon name="search-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>


   
      <View style={styles.balanceContainer}>
        <View style={styles.wallet}>
          <Text style={styles.balanceText}>Wallet balance</Text>
          <Text style={styles.balanceAmount}>Rp1.000.000</Text>
        </View>
        <TouchableOpacity style={styles.topUpButton}>
          <Text style={styles.topUpText}>Top up</Text>
        </TouchableOpacity>
      </View>

    
      <View style={styles.banner}>
        <Image
          source={require('../assets/banner.png')}
          style={styles.bannerImage}
        />
      </View>

  
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>Shop by Category</Text>
        <View style={styles.categoryRow}>
          <TouchableOpacity style={styles.categoryBox}>
            <Icon name="walk-outline" size={30} color="#000" />
            <Text style={styles.categoryItem}>Footwear</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryBox}>
            <Icon name="briefcase-outline" size={30} color="#000" />
            <Text style={styles.categoryItem}>Bags</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryBox}>
            <Icon name="shirt-outline" size={30} color="#000" />
            <Text style={styles.categoryItem}>Apparel</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.productsContainer}>
        <Text style={styles.sectionTitle}>For You</Text>
        <View style={styles.productRow}>
          <View style={styles.productItem}>
            <Image
              source={require('../assets/pic1.png')} 
              style={styles.productImage}
            />
            <Text>Air Legging Sport</Text>
            <Text style={styles.productPrice}>Rp200.000</Text>
          </View>
          <View style={styles.productItem}>
            <Image
              source={require('../assets/pic2.png')} 
              style={styles.productImage}
            />
            <Text>Aero Sport Infinity Max</Text>
            <Text style={styles.productPrice}>Rp450.000</Text>
          </View>
        </View>
        <View style={styles.productRow}>
          <View style={styles.productItem}>
            <Image
              source={require('../assets/pic3.png')} 
              style={styles.productImage}
            />
            <Text>Sport+ Runner Blue Edition</Text>
            <Text style={styles.productPrice}>Rp250.000</Text>
          </View>
          <View style={styles.productItem}>
            <Image
              source={require('../assets/pic4.png')} 
              style={styles.productImage}
            />
            <Text>Sport+ Bag</Text>
            <Text style={styles.productPrice}>Rp300.000</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff6600',
  },
  topBarIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartIcon: {
    marginLeft: 15,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  searchContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  wallet: {
    justifyContent: 'center',
  },
  balanceText: {
    fontSize: 14,
    color: '#999',
  },
  balanceAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  topUpButton: {
    backgroundColor: '#ff6600',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  topUpText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  banner: {
    marginVertical: 15,
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  categoryContainer: {
    marginTop: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  categoryBox: {
    alignItems: 'center',
  },
  categoryItem: {
    fontSize: 16,
    marginTop: 5,
  },
  productsContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productItem: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  productPrice: {
    fontWeight: 'bold',
    color: '#ff6600',
  },
});
