import BgImage from "../components/BgImage";
import { Text, StyleSheet, View, SafeAreaView, TextInput } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import ButtonComponent from "../components/ButtonComponent";


const LoginScreen = () => {
    const text = 'Hello, my container is blurring contents underneath!';
    const [number, setNumber] = useState('');
    const navigation = useNavigation();
    const handleClick = () => {
      if (number.length === 10) {
        console.log('this is number ----->', number);
        navigation.navigate('OtpValidation');
          
        } else {
          alert('Please enter a valid 10-digit phone number');
        }
      };

    return <>
    <BgImage>
        <SafeAreaView style={styles.container}>
        <Text style={styles.welcomeText}>Welcome! Glad to see you</Text>
        <BlurView intensity={60} tint="dark" style={styles.blurContainer}>
        <View style={styles.textInputContainer}>
        <Ionicons name="call" size={24} color="#444" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Please Enter your Number"
              placeholderTextColor="#777"
              onChangeText={(e) => setNumber(e)}
              maxLength={10} 
              keyboardType="number-pad" 
              autoCapitalize='none' 
              autoCorrect={false}
              value={number}
            />
        </View>
        <View style={styles.button}>

        <ButtonComponent onPress={handleClick}>Get Otp</ButtonComponent>
        </View>

    
        </BlurView>
    </SafeAreaView>

    </BgImage>
    </>

}
export default LoginScreen;

const styles = StyleSheet.create({
    button: {
      width: '100%'
    },
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
    textInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ddd',
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 8,
      marginBottom: 20,
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 1)', 
    },
    icon: {
      marginRight: 8,
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: '#333',
    },
    
  });