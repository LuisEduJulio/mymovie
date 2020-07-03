import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        margin: 10,
        height: 240,
        width: 380,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#FE642E',
        padding: 10             
    },
    Title: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    },
    Imagem: {
        height: 200,
        width: 180,
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
    },
    ContainerTitle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 10,
        marginTop: 7
    },
    TitleMovie: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    LegendMovie: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    Button: {
        marginTop: 22,
        height: 30,
        backgroundColor: '#FFF',
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    TextButton: {
        color: '#FE642E',
        fontWeight: 'bold'
    }
});