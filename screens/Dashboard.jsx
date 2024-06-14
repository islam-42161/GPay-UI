import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BORDER_RADIUS, COLORS, FONT_SIZES, FONT_WEIGHTS, SPACING, STATUSBAR_HEIGHT } from '../const/theme';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { BANK_INFO, REWARD_IMAGE } from '../const/data';

const Dashboard = ({ navigation, route }) => {
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
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.main}>
        <View style={styles.profileSection}>
          <View style={styles.profileInfo}>
            <Text style={styles.titleText}>Kristin Watson</Text>
            <View>
              <Text style={styles.detailsText}>+8801234567890</Text>
              <Text style={styles.detailsText}>krintinW@oksbi.com</Text>
            </View>
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
        <View style={styles.bottom}>
          {/* Bank */}
          <View style={{
            flexDirection: 'row',
            padding: SPACING.large,
            gap: SPACING.medium,
            borderRadius: BORDER_RADIUS.extraLarge,
            backgroundColor: COLORS.background.paper,
            alignItems: 'center'
          }}>
            <View style={styles.bank_logo}>
              <Image
                source={BANK_INFO.LOGO}
                transition={500}
                style={StyleSheet.absoluteFill}
              />
            </View>
            <View>
              <Text style={{ ...styles.titleText, color: COLORS.text.primary, fontWeight: FONT_WEIGHTS.medium }}>{BANK_INFO.BANK_NAME}</Text>
              <Text style={{ ...styles.detailsText, color: COLORS.text.secondary }}>{BANK_INFO.ACCOUNT_TYPE}</Text>
              <Text style={{ ...styles.detailsText, color: COLORS.text.secondary }}>{BANK_INFO.ACCOUNT_CATEGORY}</Text>
            </View>
          </View>
          {/* Add Bank */}
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: SPACING.large,
            paddingVertical: SPACING.medium,
            borderRadius: BORDER_RADIUS.extraLarge,
            backgroundColor: COLORS.background.paper,
            alignItems: 'center'
          }}>
            <Text style={{ ...styles.detailsText, color: COLORS.text.primary, fontWeight: FONT_WEIGHTS.medium }}>Add another bank account</Text>
            <MaterialCommunityIcons name='arrow-right' size={FONT_SIZES.extraLarge} color={COLORS.text.secondary} />
          </View>

          {/* reward n invite */}
          <View style={{flexDirection:'row',gap:SPACING.medium,height:100}}>
            {/* reward */}
<View style={{flex:1, backgroundColor:COLORS.background.paper,borderRadius:BORDER_RADIUS.extraLarge,flexDirection:'row'}}>
  <View style={{height:"100%",overflow:'hidden',backgroundColor:'pink',aspectRatio:1,borderWidth:3,borderColor:COLORS.primary[500],borderRadius:BORDER_RADIUS.extraLarge}}>
<Image
source={REWARD_IMAGE}
style={StyleSheet.absoluteFill}

/>
  </View>
  <View style={{padding:SPACING.medium,flex:1,alignItems:'center',justifyContent:'center'}}>
    <View>
  <Text style={{ ...styles.titleText, color: COLORS.text.primary, fontWeight: FONT_WEIGHTS.medium }} numberOfLines={2}>$1906</Text>
  <Text style={{ ...styles.detailsText, color: COLORS.text.secondary }}>Rewards earned!</Text>
  </View>
  </View>
</View>
{/* invite */}
<View style={{padding:SPACING.large,gap:SPACING.small,borderRadius:BORDER_RADIUS.extraLarge,backgroundColor:COLORS.background.paper,alignItems:'center',justifyContent:'center'}}>
            <MaterialCommunityIcons name='plus' size={FONT_SIZES.extraLarge} color={COLORS.text.secondary} />
            <View>
            <Text style={{ ...styles.detailsText, color: COLORS.text.primary,textAlign:'center' }}>Invite</Text>
            <Text style={{ ...styles.detailsText, color: COLORS.text.primary,textAlign:'center' }}>Friends</Text>
            </View>
</View>
          </View>
          <View style={{
            flexDirection: 'row',
            paddingHorizontal: SPACING.large,
            paddingVertical: SPACING.medium,
            borderRadius: BORDER_RADIUS.extraLarge,
            backgroundColor: COLORS.background.paper,
            alignItems: 'center',
            gap:SPACING.medium
          }}>
            <MaterialCommunityIcons name='help-circle-outline' size={FONT_SIZES.extraLarge} color={COLORS.text.secondary} />
            <Text style={{ ...styles.detailsText, color: COLORS.text.primary, fontWeight: FONT_WEIGHTS.medium }}>Help & Feedback</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            paddingHorizontal: SPACING.large,
            paddingVertical: SPACING.medium,
            borderRadius: BORDER_RADIUS.extraLarge,
            backgroundColor: COLORS.background.paper,
            alignItems: 'center',
            gap:SPACING.medium
          }}>
            <MaterialCommunityIcons name='cog-outline' size={FONT_SIZES.extraLarge} color={COLORS.text.secondary} />
            <Text style={{ ...styles.detailsText, color: COLORS.text.primary, fontWeight: FONT_WEIGHTS.medium }}>Settings</Text>
          </View>
          
        </View>
      </View>
      </ScrollView>
    </Pressable>
  );
};

export default Dashboard;

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
  main: {
    gap: SPACING.large,
    flexGrow: 1,
  },
  headerText: {
    color: 'white',
    fontSize: FONT_SIZES.medium,
    fontWeight: FONT_WEIGHTS.medium,
  },
  profileSection: {
    paddingVertical: SPACING.large,
    paddingHorizontal: SPACING.extraLarge,
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
    // justifyContent:'space-between',
  },
  titleText: {
    fontSize: FONT_SIZES.medium,
    color: 'white',
  },
  detailsText: {
    fontSize: FONT_SIZES.small,
    color: 'rgba(255,255,255,0.7)',
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImageWrapper: {
    height: 60,
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
    height: 44,
    aspectRatio: 1,
    fontSize: 24,
    borderRadius: 26,
    position: 'absolute',
    top: 10,
    left: -30,
    elevation: 3
  },
  bottom: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS.extraLarge,
    borderTopRightRadius: BORDER_RADIUS.extraLarge,
    padding: SPACING.large,
    gap: SPACING.medium
  },
  bank_logo: {
    height: 50,
    aspectRatio: 1,
    borderRadius: 25,
    overflow: 'hidden'
  }
});
