import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashScreen from '../screens/FlashScreen';
import LoginScreen from '../screens/Login';
import OtpValidatioScreen from '../screens/OtpValidation';
import HomeScreen from '../screens/HomeScreen';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
const Stack = createNativeStackNavigator();

const Navigator = () =>{

    return (
        <>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="FlashScreen" component={FlashScreen} options={{headerShown: false }} ></Stack.Screen>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false }}></Stack.Screen>
                <Stack.Screen name="OtpValidation" component={OtpValidatioScreen} options={{headerShown: false }}></Stack.Screen>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerBackVisible: false , headerTitleAlign: "center"}} />
            </Stack.Navigator>
        </NavigationContainer>
        </>
    )

}
export default Navigator;