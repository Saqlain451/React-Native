import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import image1 from "../../assets/pexels-photo-220067.webp";
import image2 from "../../assets/pexels-photo-255379.webp";
import image3 from "../../assets/pexels-photo-531880.jpeg";
import image4 from "../../assets/pexels-photo-949587.webp";
import image5 from "../../assets/pexels-photo-1191710.webp";

const data = [
    {
        name: "Biplab",
        imgSrc: image1,
        id: "1"
    },
    {
        name: "Nandini",
        id: "2",
        imgSrc: image2
    },
    {
        name: "Deepti",
        id: "3",
        imgSrc: image3
    },
    {
        name: "xyz",
        id: "4",
        imgSrc: image4
    }, {
        name: "Sakil",
        id: "5",
        imgSrc: image5
    }
]

const style = StyleSheet.create({
    cardWrapper: {
        width: "100%",
        height: "auto"
    },
    card: {
        width: 300,
        height: 200,
        borderRadius: 5,
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        overflow: 'hidden',
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "rgba(255,255,255,0.15)",
    },
    cardText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    imageFluid: {
        width: "100%",
        height: "auto",
        aspectRatio: 2520 / 1418,
        objectFit: "cover"
    }

})
const Lists = () => {
    const {card, cardWrapper, cardText, imageFluid} = style
    return (
        <>
            <FlatList
                style={cardWrapper}
                keyExtractor={(key) => key.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={(ele) => {
                    const {name,imgSrc} = ele.item;
                    console.log(imgSrc);
                    return (

                        <View style={card}>
                            <Image source={imgSrc} style={imageFluid}/>
                            <Text style={cardText}>{name}</Text>
                        </View>
                    )
                }}
            />
        </>
    )
}

export default Lists;