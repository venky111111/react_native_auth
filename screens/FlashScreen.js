import { Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../components/ButtonComponent";

function FlashScreen() {
    const navigation = useNavigation();

    function screenChangeHandler() {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <Image 
                source={{uri: 'https://www.thesill.com/cdn/shop/products/the_sill-variant-white_gloss-money_tree.jpg?v=1722610352&width=1445'}} 
                style={styles.image} 
            />
            <View style={styles.adj} />
            <View style={styles.buttonContainer}>   
            <ButtonComponent onPress={screenChangeHandler}>Login</ButtonComponent>
                <TouchableOpacity style={styles.registerButton} onPress={screenChangeHandler}>
                    <Text style={styles.registerText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default FlashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebe6e1',
    },
    image: {
        width: '100%',
        height: '80%',
        marginBottom: 10
    },
    adj: {
        marginHorizontal: 20
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 20
    },
    registerButton: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#333333',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center'
    },
    registerText: {
        color: '#333333',
        fontSize: 16,
        fontWeight: 'bold'
    }
});
