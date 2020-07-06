import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 380,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 10             
    },
    Title: {
        color: '#808080',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20
    },
    Imagem: {
        height: 200,
        width: 180,
        borderRadius: 5,  
        marginBottom: 10,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 2,
        shadowRadius: 3,
        elevation: 6,
        borderColor: '#FFF',
        borderWidth: 1            
    },
    ContainerTitle: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 10,
    },
    TitleMovie: {
        color: '#808080',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    LegendMovie: {
        color: '#C0C0C0',
        fontSize: 17,
        fontWeight: 'bold',
        width: 180
    },
    Button: {
        marginTop: 30,
        height: 30,
        backgroundColor: '#FFF',
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#970E3E',
        borderWidth: 1
    },
    TextButton: {
        color: '#970E3E',
        fontWeight: 'bold'
    }
});