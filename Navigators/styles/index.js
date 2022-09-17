import { StyleSheet } from "react-native";

const menubar = StyleSheet.create({
    container:{
        height: 350, width: 85, backgroundColor: '#5A5959', 
        justifyContent: 'space-evenly', alignItems: 'center', 
    },
    button:{
        justifyContent: 'center', alignItems: 'center', 
    },
    image:{
        height: 50, width: 50
    },
    text:{
        fontSize: 14, fontWeight: '400', color: 'white', textAlign: 'center', width: 60
    }
})

const footer = StyleSheet.create({
    container:{
        height: 120, width: 280, backgroundColor: '#5A5959', 
        justifyContent: 'center', alignItems: 'center', 
    },
    image:{
        height: 100, width: 220, marginTop: 15
    }
})
const form = StyleSheet.create({
    container1:{
        marginHorizontal: 30, marginVertical: 40, flex: 1, justifyContent: 'flex-start',  
    },
    icon:{
        height: 35, width: 35, borderRadius: 50, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center'
    },
    containerTitle:{
        alignItems: 'center', justifyContent: 'space-between', height: 40, flexDirection: 'row',
    },
    title:{
        fontSize: 20, fontWeight: '700', color: 'gray', marginEnd: 90
    },
    container2:{
        justifyContent: 'center', marginVertical: 30
    },
    container3:{
        marginTop: 10, justifyContent: 'center', alignItems: 'center'
    },
    container4:{
        justifyContent: 'flex-end', marginTop: 25, flexDirection: 'row'
    },
    input:{
        width: 320, height: 30, backgroundColor: 'white', flexDirection: 'row', paddingHorizontal: 5,
        justifyContent: 'space-between', alignItems: 'center', fontSize: 12, color: '#B3ADAD', marginBottom: 10
    }, 
    button:{
        width: 70, height: 30, borderRadius: 5, backgroundColor: '#A8A7A7', justifyContent: 'center', marginStart: 100
    },
    text:{
        fontSize: 15, fontWeight: '700', color: 'white', textAlign: 'center'
    },
    button2:{
        width: 70, height: 30, borderRadius: 5, justifyContent: 'center', backgroundColor: 'white', marginEnd: 5
    },
    text2:{
        fontSize: 12, fontWeight: '400', color: '#B2ADAD', textAlign: 'center'
    },
})
const cam = StyleSheet.create({    
    container: {
        flex: 1, flexDirection: 'column', backgroundColor: 'black',
      },
      preview: {
        height: 250, width: "60%", marginTop: 10, justifyContent: 'flex-end', alignItems: 'center',
      },
      capture: {
        backgroundColor: 'white', borderRadius: 5, padding: 5, alignSelf: 'center', marginTop: -40,
      },
})
const itemLista = StyleSheet.create({    
    container1:{
        justifyContent: 'center', marginTop: 25, backgroundColor: 'white', flex: 1, padding: 15
    },
    container2:{
        height: 70, flexDirection: 'row', marginBottom: 15, justifyContent: 'space-between'
    },
    container3:{
        marginStart: 0, justifyContent: 'flex-start', flexDirection: 'row'
    },
    container4:{
        marginStart: 10, justifyContent: 'flex-start'
    },
    text:{
        fontWeight: '400', fontSize: 10, marginEnd: 10, minWidth: 50, textTransform: 'uppercase', color: '#B3ADAD'
    }, 
    text2:{
        fontWeight: '700', fontSize: 12, marginEnd: 10, minWidth: 50, color: '#B3ADAD'
    },    
    image:{
        height: 70, width: 90, borderColor: '#B3ADAD', borderWidth: 1,
    },    
    icon:{
        height: 20, width: 20, opacity: 0.5
    },
})

export { menubar, footer, form, itemLista, cam };
