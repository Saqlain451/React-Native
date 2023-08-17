import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "../Styles/Style";
import {MaterialIndicator} from 'react-native-indicators'
import {Checkbox} from "expo-checkbox";

const Form = () => {

    const [inpData, setInpData] = useState({
        mail: "",
        pass: "",
    })

    const [checkboxVal, setCheckBoxVal] = useState(false)

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

            {/*Todo ------------------Email id --------------------*/}
            <Text style={styles.labelText}>Email id</Text>
            <TextInput autoCapitalize={"none"} autoComplete={"off"}
                       style={styles.inputText} value={inpData.mail} onChangeText={(e) => {
                handleChange('mail', e)
            }}/>

            {/*todo ---------------Password input field ------------------*/}
            <Text style={styles.labelText}>Password </Text>
            <TextInput secureTextEntry autoComplete={"off"}
                       autoCapitalize={"none"} style={styles.inputText} value={inpData.pass} onChangeText={(e) => {
                handleChange('pass', e)
            }}/>

            {/*todo ---------------- Checkbox ---------------------------*/}

            <View style={[styles.buttonWrapper, {justifyContent: "start", gap: 7,}]}>
                <Checkbox value={checkboxVal} onValueChange={() => {
                    setCheckBoxVal(!checkboxVal)
                }}/>
                <Text style={[styles.labelText, {marginTop: 0}]}>I agree with the T&C</Text>
            </View>

            {/* todo -----------Form Buttons --------------*/}
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={[styles.buttonStyle, {backgroundColor: checkboxVal ? "#1C9C7D" : "gray"}]}
                                  disabled={!checkboxVal}
                                  onPress={() => {
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