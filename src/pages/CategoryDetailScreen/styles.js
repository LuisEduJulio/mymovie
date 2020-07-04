import { StyleSheet } from 'react-native';


export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },    
    Icon: {
        margin: 30
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: 10,
        padding: 10,
    },
    Imagem: {
        width: 200,
        height: 300,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 2,
        borderColor: '#FFF',
        borderWidth: 1,
        borderRadius: 5       
    },
    containerDetail:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingLeft: 20,
    },
    Title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 10
    },
    Legend: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#6E6E6E'
    },
    Bold: {
        fontWeight: 'bold'
    },
    TextDescribe:{
        fontSize: 20,
        color: '#1C1C1C',
        marginTop: 10
    }

});
