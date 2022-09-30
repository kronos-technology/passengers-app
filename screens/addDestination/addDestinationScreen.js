import { Text, StyleSheet, View, Image, StatusBar, ScrollView, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState, } from 'react'
import { Colors, Fonts, Sizes } from '../../constants/styles';
import { MaterialIcons } from '@expo/vector-icons';

const recentSearchesList = [
    '6391 Elgin St. Celina, Delaware 10299',
    '3517 W. Gray St. Utica, Pennsylvania 57867',
    '2464 Royal Ln. Mesa, New Jersey 45463',
];

const AddDestinationScreen = ({ navigation }) => {

    const [currentLocation, setCurrentLocation] = useState('');
    const [destinationLocation, setDestinationLocation] = useState('1901 Thornridge Cir. Shiloh, Hawaii 81063');

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                {locationInfo()}
                {recentSearchInfo()}
            </View>
        </SafeAreaView>
    )

    function recentSearchInfo() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding - 5.0 }}>
                    <Text style={{ marginBottom: Sizes.fixPadding, ...Fonts.blackColor18SemiBold }}>
                        Recent Search
                    </Text>
                    {
                        recentSearchesList.map((item, index) => (
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => navigation.push('NearByStations')}
                                key={`${index}`} style={{ marginBottom: Sizes.fixPadding - 5.0, flexDirection: 'row', alignItems: 'center', }}
                            >
                                <MaterialIcons name="history" size={18} color={Colors.grayColor} />
                                <Text style={{ flex: 1, marginLeft: Sizes.fixPadding, ...Fonts.grayColor15Regular }}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </ScrollView>
        )
    }

    function locationInfo() {
        return (
            <View style={styles.locationInfoWrapStyle}>
                <View style={{ marginHorizontal: Sizes.fixPadding + 5.0, flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={require('../../assets/images/icons/locationFixed.png')}
                        style={{ width: 22.0, height: 22.0, resizeMode: 'contain' }}
                    />
                    <TextInput
                        autoFocus
                        value={currentLocation}
                        onChangeText={(value) => setCurrentLocation(value)}
                        placeholder='Your current location'
                        placeholderTextColor={Colors.blackColor}
                        selectionColor={Colors.primaryColor}
                        style={{ flex: 1, marginLeft: Sizes.fixPadding * 2.0, ...Fonts.blackColor15Regular }}
                    />
                </View>
                <View style={styles.currentToDestinationDividerStyle}>
                    <Text style={styles.dotStyle}>
                        •{`\n`}
                        •{`\n`}
                        •
                    </Text>
                    <View style={styles.locationDividerStyle} />
                </View>
                <View style={{ marginHorizontal: Sizes.fixPadding + 5.0, flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={require('../../assets/images/icons/location.png')}
                        style={{ width: 22.0, height: 22.0, resizeMode: 'contain' }}
                    />
                    <TextInput
                        value={destinationLocation}
                        onChangeText={(value) => setDestinationLocation(value)}
                        placeholder='Your destination location'
                        placeholderTextColor={Colors.blackColor}
                        selectionColor={Colors.primaryColor}
                        style={{ flex: 1, marginLeft: Sizes.fixPadding * 2.0, ...Fonts.blackColor15Regular }}
                    />
                </View>
            </View>
        )
    }

    function header() {
        return (
            <View style={{ margin: Sizes.fixPadding * 2.0, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.pop()}
                    style={styles.backIconWrapStyle}
                >
                    <MaterialIcons name="keyboard-arrow-left" size={24} color={Colors.blackColor} />
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', flex: 1, ...Fonts.blackColor20Bold }}>
                    Add Destination
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backIconWrapStyle: {
        width: 36.0,
        height: 36.0,
        borderRadius: 18.0,
        backgroundColor: 'rgba(111, 111, 111, 0.05)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    locationDividerStyle: {
        marginLeft: Sizes.fixPadding * 2.0,
        flex: 1,
        backgroundColor: 'rgba(111, 111, 111, 0.1)',
        height: 1.0
    },
    currentToDestinationDividerStyle: {
        marginLeft: Sizes.fixPadding + 5.0,
        marginVertical: Sizes.fixPadding - 6.0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    dotStyle: {
        textAlign: 'center',
        width: 22.0,
        ...Fonts.grayColor16UltraLight,
        lineHeight: 6.0,
        paddingTop: 5.0,
    },
    locationInfoWrapStyle: {
        backgroundColor: 'rgba(111, 111, 111, 0.05)',
        marginHorizontal: Sizes.fixPadding * 2.0,
        paddingVertical: Sizes.fixPadding + 5.0,
        marginTop: Sizes.fixPadding,
        marginBottom: Sizes.fixPadding * 2.0,
    }
})

export default AddDestinationScreen;