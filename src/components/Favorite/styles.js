import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        height: 240,
        width: 150,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'flex-start',
        padding: 10,
    },
    Title: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 4
    },
    Imagem: {
        height: 150,
        width: 120,
        borderRadius: 5,
        borderColor: '#FFF',
        borderWidth: 1,
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