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
        fontSize: 20,
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: 'bold',
    },
    buttonContainer: {
        borderColor: '#aeaaaa',
        borderWidth: 4,
        height: 70,
        width: 320,
        borderRadius: 50,
        margin: 20,
    },
    buttonOverContainer: {
        borderColor: '#a43e4a',
        borderWidth: 2,
        height: 63,
        width: 313,
        borderRadius: 45,
        alignItems:'center',
        justifyContent:'center'
    },
})



export default GradientButton;