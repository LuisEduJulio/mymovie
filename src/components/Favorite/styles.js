import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        margin: 10,
        height: 240,
        width: 150,
        backgroundColor: '#0B0B3B',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 2,
        borderColor: '#970E3E',
        borderWidth: 1
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
        borderColor: '#FFF',
        borderWidth: 1
    }
});