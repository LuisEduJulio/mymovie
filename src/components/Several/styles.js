import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        margin: 10,
        height: 240,
        width: 150,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#0174DF'             
    },
    Title: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    },
    Imagem: {
        height: 150,
        width: 120,
        marginTop: 10,
        borderRadius: 5,  
        marginBottom: 10,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 2,
        shadowRadius: 3,
        elevation: 6,            
    }
});