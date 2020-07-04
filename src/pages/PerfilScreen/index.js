import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Divider } from '@ui-kitten/components';
import { Ionicons } from '@expo/vector-icons';
import { Styles } from './styles';

function PerfilScreen() {
    const navigation = useNavigation();
    return (
        <View style={Styles.container}>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={Styles.topContainer}
                >
                    <Ionicons name="md-arrow-round-back" size={24} color="#0B0B61" style={Styles.Icon} />
                </TouchableOpacity>
            </View>
            <View style={Styles.containerText}>
                <Text style={Styles.TextTitle}>E-mail</Text>
                <Text style={Styles.TextLegend}>email@email.com</Text>
                <Divider style={Styles.Divider} />
                <Text style={Styles.TextTitle}>Nome</Text>
                <Text style={Styles.TextLegend}>Doe Jow</Text>
                <Divider style={Styles.Divider} />
                <Divider />
            </View>
        </View>
    );
};

export default PerfilScreen;