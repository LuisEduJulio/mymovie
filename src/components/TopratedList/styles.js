import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        margin: 10,
        height: 240,
        width: 150,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
    },
    Title: {
        color: '#808080',
        fontSize: 13,
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 4,
        textAlign: 'center'
    },
    Imagem: {
        height: 150,
        width: 120,
        marginTop: 10,
        borderRadius: 5,  
        marginBottom: 8,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 2,
        shadowRadius: 3,
        elevation: 6,
        borderColor: '#FFF',
        borderWidth: 1            
    }
});