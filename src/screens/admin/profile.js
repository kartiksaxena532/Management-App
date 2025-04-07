import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BottomNav from '../../components/BottomNav'; // Adjust the import path

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={styles.avatarContainer}>
          <Image
            source={require('../../../assets/profile.jpg')} // Placeholder image URL
            style={styles.avatar}
          />
        </View>
        <Text style={styles.name}>Admin</Text>
        <Text style={styles.names}>Dhrits15</Text>
        <Text style={styles.phone}>+91 9593698562</Text>
      </View>

      {/* Profile details */}
      <View style={styles.profileDetails}>
        <View style={styles.detailRow}>
          <Text style={styles.detailHeading}>Email:</Text>
          <Text style={styles.detailText}>admin@jiit.ac.in</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailHeading}>Gender:</Text>
          <Text style={styles.detailText}>Femaleale</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailHeading}>Date of Birth:</Text>
          <Text style={styles.detailText}>January 1, 2002</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailHeading}>Experience:</Text>
          <Text style={styles.detailText}>10 + Years</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailHeading}>Details :</Text>
          <Text style={styles.detailText}>Curated Education Institute WebApp Into the cross platform mobile app for maojor project part 2</Text>
        </View>
        <TouchableOpacity style={styles.changePasswordButton}>
          <MaterialIcons name="lock" size={24} color="red" />
          <Text style={styles.changePasswordText}>Change Password</Text>
        </TouchableOpacity>
      </View>
      {/* Bottom Navigation */}
      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#104E8B',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  name: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  names: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  phone: {
    color: 'white',
    fontSize: 17,
    marginBottom: 30,
  },
  profileDetails: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#083D77',
    borderRadius: 20,
    marginHorizontal: 8,
    marginTop: -20,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  detailHeading: {
    fontWeight: 'bold',
    marginRight: 15,
    fontSize: 18,
    width: 170,
  },
  detailText: {
    flex: 1,
  },
  changePasswordButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    color: 'red',
  },
  changePasswordText: {
    color: 'red',
    marginLeft: 5,
  },
});

export default ProfileScreen;
