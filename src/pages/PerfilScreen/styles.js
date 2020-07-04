import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
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
        fontWeight: 'bold'
    },
    TextLegend: {
        fontSize: 30,
        color: '#6E6E6E'
    },
    Divider:{
        backgroundColor: '#000',
        height: 1,
        marginTop: 5,
        marginBottom: 5
    }
});