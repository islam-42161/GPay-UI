import { Keyboard, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BORDER_RADIUS, COLORS, FONT_SIZES, FONT_WEIGHTS, SPACING, STATUSBAR_HEIGHT } from '../const/theme'
import { TextInput } from 'react-native-gesture-handler'
import { Image } from 'expo-image'
import { MaterialIcons,Foundation } from '@expo/vector-icons';
const Home = () => {
  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
        <View style={styles.top}>

        <View style={styles.headingBar}>
            <Pressable style={styles.searchBar}>
                <TextInput
                style={{flex:1}}
                placeholder='Pay by name or Phone number'
                />
            </Pressable>
            <Pressable style={styles.avatar}>
                <Image
                transition={500}
                source={'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxIss5IsLcvu7gmR2zDMQg4Pyy-guEblfe0o7ggjCvS_YAk6sICcnBevUAMYvaB-VlGHJa'}
                contentFit='cover'
                style={StyleSheet.absoluteFillObject}
                />
            </Pressable>
        </View>
        <View style={styles.header_actions}>
            <TouchableOpacity style={styles.action_one}>
            <MaterialIcons name="qr-code-scanner" size={36} color="black" />
            <Text style={{fontSize:FONT_SIZES.small,fontWeight:FONT_WEIGHTS.regular}}>Scan</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.action_two}>
            <Foundation name="home" style={{height:36,width:36,borderRadius:18,textAlign:'center',textAlignVertical:'center',backgroundColor:COLORS.background.paper,color:COLORS.text.secondary,fontSize:24,marginRight:SPACING.small}} />
            <Text numberOfLines={3} style={{fontSize:FONT_SIZES.small,fontWeight:FONT_WEIGHTS.regular,flex:1,color:COLORS.background.paper}}>Build Houses in Indi-Home</Text>
            <MaterialIcons name="chevron-right" size={24} color={COLORS.background.paper} />
            </TouchableOpacity>
        </View>
        </View>

    </Pressable>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.primary[500],
        paddingTop:STATUSBAR_HEIGHT+SPACING.large,
    },
    top:{
        gap:SPACING.large,
        paddingHorizontal:SPACING.large,
        paddingBottom:SPACING.large
    },
    headingBar:{
        flexDirection:'row',
        alignItems:'center',
        height:50,
        gap:SPACING.small
    },
    searchBar:{
        flex:1,
        borderRadius:BORDER_RADIUS.large,
        backgroundColor:COLORS.background.paper,
        height:'100%',
        padding:SPACING.medium,
        alignItems:'center',
        flexDirection:'row',
        elevation:5
    },
    avatar:{
        height:'100%',
        aspectRatio:1,
        backgroundColor:COLORS.background.paper,
        borderRadius:BORDER_RADIUS.large,
        borderWidth:2,
        borderColor:COLORS.background.paper,
        overflow:'hidden',
        elevation:5,
    },
    header_actions:{
        flexDirection:'row',
        gap:SPACING.medium,
        // height:100,
    },
    action_one:{
        borderRadius:BORDER_RADIUS.extraLarge*1.5,
        backgroundColor:COLORS.background.paper,
        alignItems:'center',
        justifyContent:'center',
        padding:SPACING.large,
        flex:1,
    },
    action_two:{
        borderRadius:BORDER_RADIUS.extraLarge*1.5,
        backgroundColor:'rgba(255,255,255,0.1)',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        gap:SPACING.small,
        padding:SPACING.large,
        flex:2,
    }
})