import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#970E3E'
    },
    Text: {
        marginBottom: 50,
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    Input: {
        marginRight: 20,
        marginLeft: 20,
        marginTop: 5,
        color: '#970E3E'
    },
    Button: {
        marginTop: 30,
        margin: 2,
        color: '#FFF',
        width: 370
    },
    ContainerButton:{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 30
    }
});