import { Dimensions, Keyboard, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { BORDER_RADIUS, COLORS, FONT_SIZES, FONT_WEIGHTS, SPACING, STATUSBAR_HEIGHT } from '../const/theme'
import { Image } from 'expo-image'
import { MaterialIcons, Foundation } from '@expo/vector-icons';
import BottomSheet, { BottomSheetBackdrop, BottomSheetScrollView, BottomSheetView } from '@gorhom/bottom-sheet';
import { businessNbills, peoples } from '../const/data'
import Animated, { FadeInDown, FadingTransition } from 'react-native-reanimated'

const { height, width } = Dimensions.get('window')
const ANIMATION_DELAY = 300
const Home = ({navigation,route}) => {
    const bottomSheetRef = useRef(null);
    const [topComponentHeight, setTopComponentHeight] = useState(0);
    const snapPoints = useMemo(() => ([height - topComponentHeight, height]), [topComponentHeight])
    // callbacks
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);

    const handleTopLayout = (event) => {
        const { height } = event.nativeEvent.layout;
        setTopComponentHeight(height);
    };

    const renderBackdrop = useCallback(
        (props) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={0}
                appearsOnIndex={1}
            />
        ),
        []
    );

    const [viewMorePeople,setViewMorePeople] = useState(false);
    const toggleViewMorePeople = useCallback(() => {
        setViewMorePeople(prevState => !prevState);
    }, [viewMorePeople]);
    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
            <View onLayout={handleTopLayout} style={styles.top}>
                <View style={styles.headingBar}>
                    <Pressable style={styles.searchBar}>
                        <TextInput
                            style={{ flex: 1,fontSize:FONT_SIZES.small }}
                            placeholder='Pay by name or Phone number'
                        />
                    </Pressable>
                    <Pressable onPress={()=>navigation.navigate('profile')} style={styles.avatar}>
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
                        <Text style={{ fontSize: FONT_SIZES.small, fontWeight: FONT_WEIGHTS.bold }}>Scan</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action_two}>
                        <Foundation name="home" style={{ height: 36, width: 36, borderRadius: 18, textAlign: 'center', textAlignVertical: 'center', backgroundColor: COLORS.background.paper, color: COLORS.text.secondary, fontSize: 24, marginRight: SPACING.small }} />
                        <Text numberOfLines={3} style={{ fontSize: FONT_SIZES.small, fontWeight: FONT_WEIGHTS.regular, flex: 1, color: COLORS.background.paper }}>Build Houses in Indi-Home</Text>
                        <MaterialIcons name="chevron-right" size={24} color={COLORS.background.paper} />
                    </TouchableOpacity>
                </View>
            </View>

            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                backdropComponent={renderBackdrop}
                activeOffsetY={[-20,20]}
                handleIndicatorStyle={{width:'15%',backgroundColor:COLORS.background.paper}}
            >
                    <BottomSheetScrollView showsVerticalScrollIndicator={false}>
                <BottomSheetView style={styles.contentContainer}>
                    <View style={styles.gridContainer}>
                        <Pressable style={styles.gridItem}>
                            <MaterialIcons name='alternate-email' style={styles.icon} />
                            <Text style={styles.grid_item_title}>Pay to UPI ID</Text>
                        </Pressable>
                        <Pressable style={styles.gridItem}>
                            <MaterialIcons name='people' style={styles.icon} />
                            <Text style={styles.grid_item_title}>Pay to Contacts</Text>
                        </Pressable>
                        <Pressable style={styles.gridItem}>
                            <MaterialIcons name='dialpad' style={styles.icon} />
                            <Text style={styles.grid_item_title}>Pay to Phone number</Text>
                        </Pressable>
                        <Pressable style={styles.gridItem}>
                            <MaterialIcons name='swap-vert' style={styles.icon} />
                            <Text style={styles.grid_item_title}>Bank Transfer</Text>
                        </Pressable>
                        <Pressable style={styles.gridItem}>
                            <MaterialIcons name='receipt' style={styles.icon} />
                            <Text style={styles.grid_item_title}>Pay Bills</Text>
                        </Pressable>
                        <Pressable style={styles.gridItem}>
                            <MaterialIcons name='smartphone' style={styles.icon} />
                            <Text style={styles.grid_item_title}>Mobile Recharge</Text>
                        </Pressable>
                    </View>

                    {/* people container */}
                    <View style={styles.rowGridContainer}>
                        <View style={styles.header}>
                            <Text style={{ fontSize: FONT_SIZES.medium, fontWeight: FONT_WEIGHTS.bold }}>People</Text>
                        </View>
                        <View style={styles.rowGrid}>
                            {/* first 3 person */}
                            {peoples.slice(0,3).map((person,index)=>(
                                <Pressable key={index.toString()} style={styles.row_item}>
                                <View style={styles.row_item_avatar}>
                                    <Image
                                        // transition={500}
                                        source={person.image}
                                        contentFit='cover'
                                        style={StyleSheet.absoluteFillObject} />
                                </View>
                                <Text style={styles.grid_item_title}>{person.fullname}</Text>
                            </Pressable>
                            )
                            )}
                            <Pressable onPress={toggleViewMorePeople} style={styles.row_item}>
                                <MaterialIcons name={viewMorePeople?'keyboard-arrow-up':'keyboard-arrow-down'} style={styles.icon} />
                                <Text style={styles.grid_item_title}>{viewMorePeople?'View Less':'View More'}</Text>
                            </Pressable>

                            {/* rest of the people */}
                            {peoples.slice(3).map((person, index) => (
                                <Pressable key={index.toString()} style={[styles.row_item, !viewMorePeople && styles.hidden]}>
                                    <View style={styles.row_item_avatar}>
                                        <Image
                                            // transition={500}
                                            source={person.image}
                                            contentFit='cover'
                                            style={StyleSheet.absoluteFillObject} />
                                    </View>
                                    <Text style={styles.grid_item_title}>{person.fullname}</Text>
                                </Pressable>
                            ))}
                        </View>
                    </View>
                    
                    {/* Business & Bills */}
                    <View style={styles.rowGridContainer}>
                        <View style={styles.header}>
                            <Text style={{ fontSize: FONT_SIZES.medium, fontWeight: FONT_WEIGHTS.bold }}>Business & Bills</Text>
                        </View>
                        <View style={styles.rowGrid}>
                        {businessNbills.slice(0,5).map((business, index) => (
                                <Pressable key={index.toString()} style={styles.row_item}>
                                    <View style={styles.row_item_avatar}>
                                        <Image
                                            // transition={500}
                                            source={business.image}
                                            contentFit='cover'
                                            style={StyleSheet.absoluteFillObject} />
                                    </View>
                                    <Text style={styles.grid_item_title}>{business.name}</Text>
                                </Pressable>
                            ))}
                        </View>
                    </View>

                </BottomSheetView>
                    </BottomSheetScrollView>
            </BottomSheet>

        </Pressable>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary[500],
        paddingTop: STATUSBAR_HEIGHT,
    },
    top: {
        gap: SPACING.large,
        paddingHorizontal: SPACING.large,
        paddingVertical: SPACING.large,
    },
    headingBar: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        gap: SPACING.small
    },
    searchBar: {
        flex: 1,
        borderRadius: BORDER_RADIUS.large,
        backgroundColor: COLORS.background.paper,
        height: '100%',
        padding: SPACING.medium,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 5
    },
    avatar: {
        height: '100%',
        aspectRatio: 1,
        backgroundColor: COLORS.background.paper,
        borderRadius: BORDER_RADIUS.large,
        borderWidth: 2,
        borderColor: COLORS.background.paper,
        overflow: 'hidden',
        elevation: 5,
    },
    header_actions: {
        flexDirection: 'row',
        gap: SPACING.medium,
    },
    action_one: {
        borderRadius: BORDER_RADIUS.extraLarge * 1.5,
        backgroundColor: COLORS.background.paper,
        alignItems: 'center',
        justifyContent: 'center',
        padding: SPACING.large,
        flex: 1,
    },
    action_two: {
        borderRadius: BORDER_RADIUS.extraLarge * 1.5,
        backgroundColor: 'rgba(255,255,255,0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: SPACING.small,
        padding: SPACING.large,
        flex: 2,
    },
    contentContainer: {
        flexGrow: 1,
        gap:SPACING.large
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: SPACING.large,
        paddingTop: SPACING.large,
        gap: SPACING.large,
        justifyContent: 'center',
    },
    gridItem: {
        padding: SPACING.extraSmall,
        alignItems: 'center',
        gap: SPACING.small,
        width: '25%',
    },
    icon: {
        width: 52,
        aspectRatio:1,
        borderRadius: 28,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: COLORS.background.paper,
        fontSize: 20
    },
    grid_item_title: {
        fontSize: FONT_SIZES.small,
        fontWeight: FONT_WEIGHTS.medium,
        textAlign: 'center'
    },
    rowGridContainer: {
        paddingHorizontal: SPACING.large,
        gap: SPACING.small
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: SPACING.large,
        alignItems: 'center',
    },
    rowGrid: {
        flexDirection: 'row',
        flexWrap:'wrap',
    },
    row_item: {
        alignItems: 'center',
        padding:SPACING.small,
        gap: SPACING.extraSmall,
        width:'25%',
        // backgroundColor:'red'
    },
    row_item_avatar: {
        width: 52,
        aspectRatio:1,
        borderRadius: 50,
        backgroundColor: COLORS.background.paper,
        overflow: 'hidden'
    },
    hidden: {
        display: 'none',
    },
})