import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

function ButtonComponent({ children, onPress }) {
  return ( 
    <View style={styles.buttonContainer}>
      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={onPress} 
        activeOpacity={0.7}
      >
        <Text style={styles.loginText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ButtonComponent;

const styles = StyleSheet.create({
  loginButton: {
    width: '100%',
    backgroundColor: '#202020',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 8,
    
  },
});
