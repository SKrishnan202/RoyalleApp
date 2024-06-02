import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const GradientButton = ({
    children,
    textStyle,
    onPress,
    icon
}) => {

    return (
        <TouchableOpacity onPress={onPress} >
            <LinearGradient
                colors={['#333', '#000']}
                style={styles.buttonContainer}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
            >
                <View style={[styles.buttonOverContainer, icon?{flexDirection: 'row', alignItems: 'center'}:null]}>
                    {icon?icon:null}
                    <Text style={[styles.text, textStyle]}>
                        {children}
                    </Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>

    )

};

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: 'bold',
    },
    buttonContainer: {
        borderColor: '#aeaaaa',
        borderWidth: 4,
        height: 55,
        width: 102,
        borderRadius: 50,
        margin: 2,
    },
 /*
     buttonOverContainer: {
        borderColor: '#a43e4a',
        borderWidth: 4,
        height: 55,
        width: 102,
        borderRadius: 50,
        alignItems:'center',
        justifyContent:'center'
    },
    */
})



export default GradientButton;