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
        width: "46%",
        borderRadius: 5
    },
    btn2Style: {
        backgroundColor: "transparent",
        borderWidth: 1.5,
        borderColor: "#1C9C7D",
    },

    forgotBtnStyle: {
        backgroundColor: "#1C9C7D",
        height: 45,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginBottom: 10,
    },

    buttonWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        marginVertical: 20,
        flexDirection: "row",
    },
})


const Form = () => {

    const [inpData, setInpData] = useState({
        mail: "",
        pass: "",
    })

    const handleChange = (name, event) => {
        setInpData({...inpData, [name]: event});
    }

    const postApi = async (url, postData) => {
        try {
            const data = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postData)
            });

            const res = await data.json();
            if (res.msg){
                setInpData({
                    mail : "",
                    pass: "",
                })
            }
            console.log(res);
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <View style={styles.formWrapeer}>
            <Text style={styles.loginText}> Login Form</Text>
            <Text style={styles.labelText}>Email id</Text>
            <TextInput autoCapitalize={"none"} autoComplete={"off"}
                       style={styles.inputText} value={inpData.mail} onChangeText={(e) => {
                handleChange('mail', e)
            }}/>
            <Text style={styles.labelText}>Password </Text>
            <TextInput secureTextEntry autoComplete={"off"}
                       autoCapitalize={"none"} style={styles.inputText} value={inpData.pass} onChangeText={(e) => {
                handleChange('pass', e)
            }}/>

            {/* todo -----------Form Buttons --------------*/}
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                    postApi("https://task-management-dd2m.onrender.com/loginUser", {...inpData})
                }}>
                    <Text style={{fontSize: 17, color: "white"}}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonStyle, styles.btn2Style]}>
                    <Text style={{fontSize: 17, color: "#1C9C7D"}}>Register</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.forgotBtnStyle}>
                <Text style={{fontSize: 17, color: "white"}}>Forgot Password</Text>
            </TouchableOpacity>

        </View>
    );
};

export default Form;