import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";


const styles = StyleSheet.create({
    formWrapeer: {
        backgroundColor: "#eaeaea",
        padding: 20,
        marginHorizontal: 30,
        borderRadius: 5,
        shadowColor: '#bebebe',
        shadowOffset: {width: 5, height: 5},
        shadowRadius: 3,
        shadowOpacity: 1,
        elevation: 10,
    },
    loginText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#1C9C7D",
        textAlign: "center"
    },
    labelText: {
        fontSize: 15,
        marginTop: 20,
    },
    inputText: {
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "#1C9C7D",
        borderRadius: 5,
        height: 45,
        paddingHorizontal: 10,
        marginTop: 5,
    },

    buttonStyle: {
        backgroundColor: "#1C9C7D",
        height: 45,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "48%",
        borderRadius: 5
    },

    buttonWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        marginVertical: 20,
        flexDirection: "row"
    },
})


const Form = () => {

    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const changeHandler = (e) => {
        setMail(e);
    }


    return (
        <View style={styles.formWrapeer}>

            <Text style={styles.loginText}> Login Form</Text>
            <Text style={styles.labelText}>Email id</Text>
            <TextInput autoCapitalize={"none"} autoComplete={"off"}
                       style={styles.inputText} value={mail} onChangeText={changeHandler}/>
            <Text style={styles.labelText}>Password </Text>
            <TextInput secureTextEntry autoComplete={"off"}
                       autoCapitalize={"none"} style={styles.inputText} value={pass} onChangeText={(e) => {
                setPass(e)
            }}/>


            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                    console.log({mail, pass})
                }}>
                    <Text style={{fontSize: 17, color: "white"}}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={{fontSize: 17, color: "white"}}>Register</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default Form;