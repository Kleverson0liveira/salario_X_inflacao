import { StyleSheet } from "react-native";

const  styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        
        },
        colunas:{
            width: '100%',
            height: 70,
            display:'flex',
            flexDirection:'row',
            alignItems: 'flex-start',            
            justifyContent: 'flex-start',       
        },
        coluna:{
            width: '50%',
            marginVertical: 'auto',
            paddingHorizontal:20
        },
        even:{
            backgroundColor:'rgba(0, 0, 0, 0.2)',
        },
    })

    export  default styles;

