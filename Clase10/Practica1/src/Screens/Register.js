import React, { Component } from "react";
import { View, Text, Pressable} from "react-native";
import { StyleSheet } from "react-native";


class Register extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}> Register </Text>
                <Pressable style={styles.boton} onPress={()=>this.props.navigation.navigate('Login')}>
                    <Text style={styles.text}>Ir a login</Text>
                </Pressable>
            </View>
        )
    }
    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 10,
        marginTop: 20,
        width: 500,
        height: 500,
    },

    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#000',
    },

    field: {
        height: 50,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderStyle: 'solid',
        borderRadius: 6,
        marginVertical: 10,
        width: '80%',
        backgroundColor: '#fff',
    },

    boton: {
        backgroundColor: '#28a745',
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#28a745',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10,
    },

    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Register