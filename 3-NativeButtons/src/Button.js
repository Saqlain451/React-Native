import {Alert, Button} from "react-native";


const Buttons = ()=>{
    return(
        <>
            <Button title={"Click me"} onPress={()=>{
                console.log(Alert.alert("I am clicked"))}} color={"green"}/>
        </>
    )
}
export  default Buttons