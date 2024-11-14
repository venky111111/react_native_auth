import BgImage from "../components/BgImage";
import { Text, StyleSheet, View, SafeAreaView, TextInput } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef } from "react";
import ButtonComponent from "../components/ButtonComponent";

const OtpValidationScreen = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const navigation = useNavigation();
    const inputRefs = useRef([]);

    const handleOtpChange = (index, value) => {
        if (/^[0-9]?$/.test(value)) { 
            let newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            
            if (value && index < otp.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleSubmit = () => {
        const enteredOtp = otp.join('');
        if (enteredOtp.length === otp.length) {
            navigation.navigate('Home'); 
        } else {
            alert("Please enter the full OTP");
        }
    };

    return (
        <BgImage>
            <SafeAreaView style={styles.container}>
                <Text style={styles.welcomeText}>Enter OTP</Text>
                <BlurView intensity={60} tint="dark" style={styles.blurContainer}>
                    <Text style={styles.infoText}>We have sent an OTP to your number</Text>
                    <View style={styles.otpContainer}>
                        {otp.map((digit, index) => (
                            <TextInput
                                key={index}
                                ref={el => inputRefs.current[index] = el}
                                style={styles.otpInput}
                                keyboardType="number-pad"
                                maxLength={1}
                                onChangeText={(value) => handleOtpChange(index, value)}
                                value={digit}
                            />
                        ))}
                    </View>
                    <ButtonComponent onPress={handleSubmit}>Verify OTP</ButtonComponent>
                </BlurView>
            </SafeAreaView>
        </BgImage>
    );
};

export default OtpValidationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(27, 26, 26, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
    },
    blurContainer: {
        borderRadius: 12,
        padding: 20,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.871)',
        overflow: 'hidden',
    },
    infoText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 20,
        
    },
    otpInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 18,
        color: '#333',
        backgroundColor: 'rgba(255, 255, 255, 1)', 
    },
});
