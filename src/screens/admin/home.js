// HomeScreen.js
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomNav from '../../components/BottomNav'; // Adjust the import path
import Auth from '@react-native-firebase/auth';
import {StackActions} from '@react-navigation/native';
import MenuModal from '../../components/MenuModal';
import firestore from '@react-native-firebase/firestore';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const HomeScreen = ({navigation}) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [event, setEvent] = useState([]);
  const eventUrl =
    'https://png.pngtree.com/png-clipart/20200908/ourmid/pngtree-creative-design-cartoon-emoji-package-event-png-image_2335507.jpg';

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventList = [];
        const snapshot = await firestore().collection('event').get();
        snapshot.forEach(doc => {
          eventList.push({...doc.data(), id: doc.id});
        });
        setEvent(eventList);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleLogout = async () => {
    await Auth().signOut();
    navigation.navigate('RoleScreen');
  };

  const events = [
    {
      id: 1,
      name: 'Alumni Meet',
      location: 'Auditorium',
      date: '22 May',
      image:
        'https://content3.jdmagicbox.com/comp/noida/82/011p85882/catalogue/jaypee-institute-of-information-technology-noida-sector-62-noida-institutes-for-it-6abzxx2pni.jpg',
    },
    {
      id: 2,
      name: 'Electronics Fair',
      location: 'Atrium - ABB2 ',
      date: '15 May',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.admissionindia.net%2Fuploads%2Fgallery%2F171%2FJaypee-University-of-Information-Technology-Solan14.png&f=1&nofb=1&ipt=735e5cde3041040f223ea6223a6616a4acfc0d0cd63f120924a196caaa5ffbff&ipo=images',
    },
    {
      id: 3,
      name: 'Food Exhibition',
      location: 'Cafeteria',
      date: '4 Jun',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fp1-tt.byteimg.com%2Forigin%2Ftos-cn-i-qvj2lq49k0%2Fec513ed69ff74d6486cf60649ce28008&f=1&nofb=1&ipt=721847ac7f954ca2751317622b132f30e03bc0b964b4f28a641594b4a422bf14&ipo=images',
    },
  ];
  

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#104E8B" barStyle="light-content" />
      <View style={styles.header}>
        
        <Text style={styles.headerText}>Welcome Admin,</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => setShowLogoutModal(true)}>
            <MaterialCommunityIcons
              name="logout"
              size={24}
              color="white"
            />
           
          </TouchableOpacity>
        </View>
      </View>

      <MenuModal
        visible={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onNavigate={handleLogout}
        buttonText="Logout"

      />

      {/* Summary Container */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.summaryContainer}>
          <View style={styles.schoolInfo}>
            <Image
              source={{
                uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgyaanarth.com%2Fwp-content%2Fuploads%2F2022%2F07%2Flogo-1-1.png&f=1&nofb=1&ipt=0e427ac4a629b2a51f9540eef627cc4e9f0b282701569eff14618d653b4857f6&ipo=images',
              }} // Replace with your school logo URL
              style={styles.schoolLogo}
            />
            <View>
              <Text style={styles.schoolName}>Jaypee Institute Of </Text>
              <Text style={styles.schoolNames}>Information And Technology</Text>
              <Text style={styles.schoolLocation}>
                Location : Noida Sector 62.
              </Text>
            </View>
          </View>

          <View style={styles.summaryGrid}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryCount}>130</Text>
              <Text style={styles.summaryText}>Teachers</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryCount}>1500</Text>
              <Text style={styles.summaryText}>Students</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryCount}>3</Text>
              <Text style={styles.summaryText}>Deps</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryCount}>200</Text>
              <Text style={styles.summaryText}>Staff</Text>
            </View>
          </View>
        </View>

        {/* Icons Grid */}
        <View style={styles.iconGrid}>
          <View style={styles.iconRow}>
            <View style={styles.iconContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('StudentsScreen')}>
                <MaterialCommunityIcons
                  name="account-group"
                  size={35}
                  color="#38598b"
                />
              </TouchableOpacity>
              <Text style={styles.iconText}>Students</Text>
            </View>
            <View style={styles.iconContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('TeacherScreen')}>
                <MaterialCommunityIcons
                  name="face-woman"
                  size={35}
                  color="#38598b"
                />
              </TouchableOpacity>
              <Text style={styles.iconText}>Teachers</Text>
            </View>
            <View style={styles.iconContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('TimeTable')}>
                <MaterialCommunityIcons
                  name="calendar-outline"
                  size={35}
                  color="#38598b"
                />
              </TouchableOpacity>
              <Text style={styles.iconText}>Timetable</Text>
            </View>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Syllabus')}>
                <MaterialCommunityIcons
                  name="newspaper-variant-outline"
                  size={35}
                  color="#38598b"
                />
              </TouchableOpacity>
              <Text style={styles.iconText}>Syllabus</Text>
            </View>
          </View>
        </View>

        {/* Upcoming Events */}
        <View style={styles.eventsContainer}>
  <Text style={styles.sectionTitle}>Upcoming Events</Text>
  {events.map(eventor => (
    <View key={eventor.id} style={styles.eventCard}>
      <Image source={{uri:eventor.image}} style={styles.eventImage}/>
      <View style={styles.eventDetails}>
        <Text style={styles.eventName}>{eventor.name}</Text>
        <Text style={styles.eventLocation}>{eventor.location}</Text>
      </View>
      <Text style={styles.eventDate}>{eventor.date}</Text>
    </View>
  ))}
</View>
      </ScrollView>
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
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#104E8B',
    paddingVertical: 15,
    paddingTop: 10,
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  menuButton: {
    marginRight: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerActions: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  actionButton: {
    marginLeft: 10,
  },
  summaryContainer: {
    backgroundColor: '#38598b',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  schoolInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  schoolLogo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  schoolName: {
    color: 'white',
    display:'flex',
    fontSize: 20,
    fontWeight: 'bold',
  },
  schoolNames: {
    display:'flex',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  schoolLocation: {
    color: 'white',
    fontSize: 16,
  },
  summaryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    
  },
  summaryItem: {
    width: '20%',
    backgroundColor: '#4B6C8B',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  summaryText: {
    color: 'white',
    fontSize: 12,
  },
  summaryCount: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconGrid: {
    marginTop: 40,
    marginHorizontal: 30,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    width: '25%',
    height: 85,
    padding: 5,
  },
  iconText: {
    color: 'black',
    marginTop: 5,
    
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#38598b',
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    marginTop: 5,
    fontSize: 12,
    color: 'black',
  },
  eventsContainer: {
    marginTop: 40,
    marginHorizontal: 20,
   
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "black",
  },
  eventCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    color: "black",
  },
  eventImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
    resizeMode: 'cover', 
  },
  eventDetails: {
    flex: 1,
     color:'black'
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black'
  },
  eventLocation: {
    fontSize: 14,
      color:'black'

  },
  eventDate: {
    fontSize: 14,
      color:'black',
    position: 'absolute',
    top: 15,
    right: 15,
  },
  scrollContent: {
    paddingBottom: 100, // Ensure the content does not get hidden behind the bottom navigation
  },
});

export default HomeScreen;
