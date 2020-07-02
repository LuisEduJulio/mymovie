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
        backgroundColor: '#0B0B3B',
        padding: 10,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 2,
        borderColor: '#FFF',
        borderWidth: 1
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
        color: '#FFF',
        marginTop: 10
    },
    Legend: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFF'
    }

});
