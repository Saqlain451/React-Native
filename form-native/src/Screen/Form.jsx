import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "../Styles/Style";
import {MaterialIndicator} from 'react-native-indicators'

const Form = () => {

    const [inpData, setInpData] = useState({
        mail: "",
        pass: "",
    })

    const [isLoginLoading, setIsLoginLoading] = useState(false);

    const handleChange = (name, event) => {
        setInpData({...inpData, [name]: event});
    }

    const postApi = async (url, postData) => {
        setIsLoginLoading(true);
        try {
            const data = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postData)
            });

            const res = await data.json();
            if (res.msg) {
                setIsLoginLoading(false);
                Alert.alert(res.msg);
                setInpData({
                    mail: "",
                    pass: "",
                })
            }
            console.log(res);
        } catch (error) {
            console.error(error)
            setIsLoginLoading(false);
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
                    {isLoginLoading ? <MaterialIndicator size={30} color="white"/> :
                        <Text style={{fontSize: 17, color: "white"}}>Log In</Text>}
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