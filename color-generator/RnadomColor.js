import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const RandomColor = () => {
    const randomColorGenerate = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const opacity = (Math.random() * 1.5).toFixed(1);
        return `rgba(${red},${green},${blue},${opacity})`;
    };

    const [color, setColor] = useState([]);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={style.buttonStyle}
                onPress={() => {
                    setColor([...color, randomColorGenerate()]);
                }}>
                <Text style={style.textStyle}>Generate Random Color</Text>
            </TouchableOpacity>

            <FlatList
                data={color}
                keyExtractor={(item) => item}
                renderItem={({item}) => (

                    <View
                        style={[
                            style.buttonStyle,
                            {
                                backgroundColor: item,
                                marginVertical: 0,
                                marginBottom: 5,
                            },
                        ]}>
                        <Text>{item}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const style = StyleSheet.create({
    buttonStyle: {
        display: 'flex',
        backgroundColor: 'blue',
        paddingVertical: 20,
        borderRadius: 5,
        marginHorizontal: 20,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 17,
        color: 'white',
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
});

export default RandomColor;
