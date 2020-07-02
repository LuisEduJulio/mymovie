import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Styles } from './styles';

function CategoryDetail({ route }) {
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
            <ScrollView>
                <View style={Styles.Card}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Image source={route.params.imagem} style={Styles.Imagem} />
                        <View style={Styles.containerDetail}>
                            <Text style={Styles.Title}>Titulo</Text>
                            <Text style={Styles.Legend}>{route.params.title}</Text>
                            <Text style={Styles.Title}>Ano</Text>
                            <Text style={Styles.Legend}>{route.params.title}</Text>
                            <Text style={Styles.Title}>Diretor</Text>
                            <Text style={Styles.Legend}>{route.params.title}</Text>
                            <Text style={Styles.Title}>Categória</Text>
                            <Text style={Styles.Legend}>{route.params.title}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={Styles.Title}>Sinopse: Sinopse é uma descrição 
                        sintética da ideia do filme. ... Ela não precisa especificar 
                        como o filme será feito, nem trazer detalhes da história que 
                        se quer contar, apenas as partes mais interessantes ou importantes.</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default CategoryDetail;