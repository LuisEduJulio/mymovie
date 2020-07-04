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
    Icon: {
        margin: 30
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Title: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
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
    },
    ContainerTitle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 10,
    },
    TitleMovie: {
        color: '#1C1C1C',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    LegendMovie: {
        color: '#6E6E6E',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
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
    },
    TextTitle: {
        margin: 10,
        marginLeft: 15,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#B40431',
        color: '#FFF',
        borderColor: '#970E3E',
        borderWidth: 1,
        width: 150,
        padding: 2,
        textAlign: 'center',
        borderRadius: 50
    }
});