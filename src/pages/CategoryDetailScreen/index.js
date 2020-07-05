import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image_base } from '../../Services/Api'
import { Styles } from './styles';

function CategoryDetailScreen({ route }) {
    const navigation = useNavigation();
    return (
        <View style={Styles.container}>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={Styles.topContainer}
                >
                    <Ionicons name="md-arrow-round-back" size={24} color="#000" style={Styles.Icon} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={Styles.Card}>
                    <View style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                        <Image source={{ uri: `${Image_base}${route.params.Photo}` }} style={Styles.Imagem} />
                        <View style={Styles.containerDetail}>
                            <Text style={Styles.Title}>Titulo</Text>
                            <Text style={Styles.Legend}>{route.params.Title}</Text>
                            <Text style={Styles.Title}>Ano</Text>
                            <Text style={Styles.Legend}>{route.params.Date}</Text>
                            <Text style={Styles.Title}>IMDB</Text>
                            <Text style={Styles.Legend}>{route.params.Imdb}</Text>
                            <Text style={Styles.Title}>Popularidade</Text>
                            <Text style={Styles.Legend}>{route.params.Popularity}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={Styles.TextDescribe}><Text style={Styles.Bold}>Sinopse: </Text>{route.params.Describe}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default CategoryDetailScreen;