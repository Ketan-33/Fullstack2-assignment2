import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const notifications = [
  {
    id: '1',
    title: 'LIMITED-TIME PROMO - UP TO 50% OFF!',
    description: 'Don\'t miss out on this special opportunity! Get up to 50% off on all our sports shoes. Check out our latest collection now!',
    time: 'Today, 10:20',
    isUnread: true,
  },
  {
    id: '2',
    title: 'FLASH SALE ALERT - SAVE BIG TODAY!',
    description: 'Hurry, our flash sale is live now! Grab your favorite sports shoes at unbeatable prices. This offer won’t last long!',
    time: 'Today, 09:05',
    isUnread: true,
  },
  {
    id: '3',
    title: 'GOOD MORNING, RUNNER!',
    description: 'It\'s time to step out and run. Give your best to your body today. Find comfort in every step.',
    time: 'Yesterday, 08:10',
    isUnread: false,
  },
  {
    id: '4',
    title: 'EXCLUSIVE DISCOUNT JUST FOR YOU',
    description: 'Hello loyal customers! We want to reward you with an exclusive 15% discount on all our shoe products. Use the code \'EXCLUSIVE15\' at checkout.',
    time: 'July 13, 2023, 17:30',
    isUnread: false,
  },
];

export default function NotificationScreen() {
  const renderItem = ({ item }) => (
    <View style={[styles.notificationItem, item.isUnread && styles.unread]}>
      <View style={styles.notificationHeader}>
        <View style={styles.notificationDot}>
          {item.isUnread && <View style={styles.dot} />}
        </View>
        <View style={styles.notificationContent}>
          <Text style={styles.notificationTime}>{item.time}</Text>
          <Text style={styles.notificationTitle}>{item.title}</Text>
          <Text style={styles.notificationDescription}>{item.description}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification</Text>
        <TouchableOpacity style={styles.markAsRead}>
          <Ionicons name="checkmark-done-outline" size={18} color="orange" />
          <Text style={styles.markAsReadText}>Mask as read</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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
  markAsRead: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  markAsReadText: {
    fontSize: 14,
    color: 'orange',
    marginLeft: 5,
  },
  listContainer: {
    paddingBottom: 20,
  },
  notificationItem: {
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 1 },
  },
  unread: {
    backgroundColor: '#FFF3E0', // Light orange background for unread notifications
  },
  notificationHeader: {
    flexDirection: 'row',
  },
  notificationDot: {
    width: 10,
    height: 10,
    marginRight: 15,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: 'orange',
    borderRadius: 5,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTime: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  notificationDescription: {
    fontSize: 14,
    color: '#666',
  },
});
