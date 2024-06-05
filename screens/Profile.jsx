import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BORDER_RADIUS, COLORS, FONT_SIZES, FONT_WEIGHTS, SPACING, STATUSBAR_HEIGHT } from '../const/theme';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';

const Profile = ({ navigation, route }) => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.nav_header}>
        <MaterialCommunityIcons
          name='arrow-left'
          size={24}
          color='white'
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerText}>Profile</Text>
        <MaterialCommunityIcons name='dots-vertical' size={24} color='white' />
      </View>
      <View style={styles.profileSection}>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Kristin Watson</Text>
          <Text style={styles.profileDetails}>+8801234567890</Text>
          <Text style={styles.profileDetails}>krintinW@oksbi.com</Text>
        </View>
        <View style={styles.profileImageContainer}>
          <View style={styles.profileImageWrapper}>
            <Image
              transition={500}
              source='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxIss5IsLcvu7gmR2zDMQg4Pyy-guEblfe0o7ggjCvS_YAk6sICcnBevUAMYvaB-VlGHJa'
              contentFit='cover'
              style={StyleSheet.absoluteFillObject}
            />
          </View>
          <MaterialCommunityIcons
            name='qrcode'
            style={styles.qrCodeIcon}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary[500],
    paddingTop: STATUSBAR_HEIGHT,
  },
  nav_header: {
    padding: SPACING.large,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: FONT_SIZES.medium,
    fontWeight: FONT_WEIGHTS.medium,
  },
  profileSection: {
    padding: SPACING.extraLarge,
    flexDirection: 'row',
    gap: SPACING.large,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginHorizontal: SPACING.large,
    borderRadius: BORDER_RADIUS.extraLarge * 1.5,
    justifyContent: 'space-between',
  },
  profileInfo: {
    gap: SPACING.small,
    flex: 1,
  },
  profileName: {
    fontSize: FONT_SIZES.large,
    color: 'white',
  },
  profileDetails: {
    fontSize: FONT_SIZES.small,
    color: 'rgba(255,255,255,0.7)',
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImageWrapper: {
    height: 80,
    aspectRatio: 1,
    borderRadius: 100,
    overflow: 'hidden',
  },
  qrCodeIcon: {
    backgroundColor: COLORS.primary[500],
    color: 'white',
    borderWidth: 2,
    borderColor: 'white',
    textAlignVertical: 'center',
    textAlign: 'center',
    height: 52,
    aspectRatio: 1,
    fontSize: 28,
    borderRadius: 26,
    position: 'absolute',
    top: 20,
    left: -25,
    elevation:3
  },
});
