import { ScrollView } from "react-native";

const Container = ({children, style, ...props}) => {

    return(
        <ScrollView 
          showsVerticalScrollIndicator={false} 
          nestedScrollEnabled={true}
          contentContainerStyle={[{flexGrow:1, backgroundColor:'#000'}, style]} 
          {...props}
          >
            {children}
        </ScrollView>
    )
}

export default Container;