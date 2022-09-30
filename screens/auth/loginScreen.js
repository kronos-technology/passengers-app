import { Text, StyleSheet, BackHandler, Image, ScrollView, View, SafeAreaView, TextInput, StatusBar, TouchableOpacity } from 'react-native'
import React, { useCallback, useState } from 'react'
import { Colors, Fonts, Sizes, } from '../../constants/styles';
import { useFocusEffect } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {

    const backAction = () => {
        backClickCount == 1 ? BackHandler.exitApp() : _spring();
        return true;
    }

    useFocusEffect(
        useCallback(() => {
            BackHandler.addEventListener("hardwareBackPress", backAction);
            return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
        }, [backAction])
    );

    function _spring() {
        setBackClickCount(1);
        setTimeout(() => {
            setBackClickCount(0)
        }, 1000)
    }

    const [backClickCount, setBackClickCount] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleBackButton() {
        backClickCount == 1 ? BackHandler.exitApp() : _spring();
        return true;
    };

    function _spring() {
        setBackClickCount(1);
        setTimeout(() => {
            setBackClickCount(0)
        }, 1000)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 2.0, }}>
                    {appLogo()}
                    {loginText()}
                    {emailInfo()}
                    {passwordInfo()}
                    {forgetPasswordText()}
                    {loginButton()}
                    {orText()}
                    {loginWithGoogleOption()}
                    {loginWithFacebookOption()}
                </ScrollView>
            </View>
            {dontAccountInfo()}
            {
                backClickCount == 1
                    ?
                    <View style={[styles.animatedView]}>
                        <Text style={{ ...Fonts.whiteColor14Regular }}>
                            Press Back Once Again to Exit
                        </Text>
                    </View>
                    :
                    null
            }
        </SafeAreaView>
    )

    function dontAccountInfo() {
        return (
            <View style={{ backgroundColor: Colors.whiteColor, padding: Sizes.fixPadding + 5.0 }}>
                <Text style={{ textAlign: 'center' }}>
                    <Text style={{ ...Fonts.grayColor16Regular }}>
                        Don’t have an account? { }
                    </Text>
                    <Text
                        onPress={() => navigation.push('Register')}
                        style={{ ...Fonts.primaryColor16Medium }}
                    >
                        Register now
                    </Text>
                </Text>
            </View>
        )
    }

    function loginWithFacebookOption() {
        return (
            <View style={styles.loginWithFacebookWrapStyle}>
                <Image
                    source={require('../../assets/images/icons/facebook.png')}
                    style={{ width: 24.0, height: 24.0, resizeMode: 'contain' }}
                />
                <Text style={{ marginLeft: Sizes.fixPadding + 5.0, ...Fonts.whiteColor16Medium }}>
                    Login with Facebook
                </Text>
            </View>
        )
    }

    function loginWithGoogleOption() {
        return (
            <View style={styles.loginWithGoogleWrapStyle}>
                <Image
                    source={require('../../assets/images/icons/google.png')}
                    style={{ width: 24.0, height: 24.0, resizeMode: 'contain' }}
                />
                <Text style={{ marginLeft: Sizes.fixPadding + 5.0, ...Fonts.blackColor16Medium }}>
                    Login with Google
                </Text>
            </View>
        )
    }

    function orText() {
        return (
            <Text style={{ textAlign: 'center', ...Fonts.grayColor15Medium }}>
                OR
            </Text>
        )
    }

    function loginButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                    navigation.push('Register')
                }}
                style={styles.buttonStyle}
            >
                <Text style={{ ...Fonts.whiteColor20SemiBold }}>
                    Login
                </Text>
            </TouchableOpacity>
        )
    }

    function forgetPasswordText() {
        return (
            <Text style={styles.forgetPasswordTextStyle}>
                Forget password?
            </Text>
        )
    }

    function passwordInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginBottom: Sizes.fixPadding - 5.0, ...Fonts.blackColor15Medium }}>
                    Password
                </Text>
                <TextInput
                    value={password}
                    onChangeText={(value) => setPassword(value)}
                    selectionColor={Colors.primaryColor}
                    style={styles.textFieldStyle}
                    secureTextEntry
                    placeholder='Your password'
                />
            </View>
        )
    }

    function emailInfo() {
        return (
            <View style={{ marginVertical: Sizes.fixPadding + 5.0, marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginBottom: Sizes.fixPadding - 5.0, ...Fonts.blackColor15Medium }}>
                    Email
                </Text>
                <TextInput
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                    selectionColor={Colors.primaryColor}
                    style={styles.textFieldStyle}
                    keyboardType="email-address"
                    placeholder='Your email address'
                />
            </View>
        )
    }

    function loginText() {
        return (
            <Text style={styles.loginTextStyle}>
                Login to your Account
            </Text>
        )
    }

    function appLogo() {
        return (
            <View style={styles.appLogoWrapStyle}>
                <Image
                    source={require('../../assets/images/marker.png')}
                    style={{ width: 32.0, height: 43.0, resizeMode: 'contain' }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    appLogoWrapStyle: {
        width: 78.0,
        height: 78.0,
        borderRadius: Sizes.fixPadding * 2.0,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        margin: Sizes.fixPadding * 3.0,
        elevation: 3.0,
        shadowColor: Colors.primaryColor,
    },
    loginTextStyle: {
        lineHeight: 22.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        textAlign: 'center',
        ...Fonts.blackColor20Bold
    },
    textFieldStyle: {
        backgroundColor: 'rgba(111, 111, 111, 0.05)',
        borderRadius: Sizes.fixPadding - 5.0,
        ...Fonts.blackColor15Regular,
        padding: Sizes.fixPadding + 2.0,
    },
    buttonStyle: {
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding - 5.0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: Sizes.fixPadding + 3.0,
        margin: Sizes.fixPadding * 2.0,
        elevation: 1.5,
        shadowColor: Colors.primaryColor
    },
    forgetPasswordTextStyle: {
        marginVertical: Sizes.fixPadding - 8.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        alignSelf: 'flex-end',
        ...Fonts.primaryColor13Medium
    },
    loginWithGoogleWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Sizes.fixPadding - 5.0,
        paddingVertical: Sizes.fixPadding + 3.0,
        borderColor: Colors.lightGrayColor,
        borderWidth: 1.0,
        backgroundColor: Colors.whiteColor,
        margin: Sizes.fixPadding * 2.0,
    },
    loginWithFacebookWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Sizes.fixPadding - 5.0,
        paddingVertical: Sizes.fixPadding + 3.0,
        backgroundColor: Colors.blueColor,
        marginHorizontal: Sizes.fixPadding * 2.0,
    },
    animatedView: {
        backgroundColor: "#333333",
        position: "absolute",
        bottom: 40,
        alignSelf: 'center',
        borderRadius: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        paddingVertical: Sizes.fixPadding,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default LoginScreen;