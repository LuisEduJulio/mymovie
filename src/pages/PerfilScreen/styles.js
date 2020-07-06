import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    Icon: {
        margin: 30
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerText: {
        padding: 30
    },  
    TextTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF'
    },
    TextLegend: {
        fontSize: 30,
        color: '#6E6E6E'
    },
    Divider:{
        backgroundColor: '#FFF',
        height: 1,
        marginTop: 5,
        marginBottom: 5
    }
});