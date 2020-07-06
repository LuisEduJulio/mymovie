import React, { Fragment } from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Divider } from '@ui-kitten/components';
import { Ionicons } from '@expo/vector-icons';
import { Styles } from './styles';

function GenresScreen({ route }) {
    const navigation = useNavigation();

    return (
        <View>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={Styles.topContainer}
                >
                    <Ionicons name="md-arrow-round-back" size={24} color="#0B0B61" style={Styles.Icon} />
                    <Text style={Styles.TextTitle}>{route.params.title}</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {List.map((Items) =>
                    <View
                        style={Styles.container}
                        key={Items.key}
                    >
                        <Image source={Items.imagem} style={Styles.Imagem} />
                        <View style={Styles.ContainerTitle}>
                            <Text style={Styles.TitleMovie}>Titulo</Text>
                            <Text style={Styles.LegendMovie}>{Items.title}</Text>
                            <Divider />
                            <Text style={Styles.TitleMovie}>Nota IMDB</Text>
                            <Text style={Styles.LegendMovie}>{Items.imdb}</Text>
                            <Divider />
                            <Text style={Styles.TitleMovie}>Lançamento</Text>
                            <Text style={Styles.LegendMovie}>{Items.year}</Text>
                            <TouchableOpacity
                                style={Styles.Button}
                                onPress={() => navigation.navigate('CategoryDetail', {
                                    imagem: Items.imagem,
                                    title: Items.title,
                                })}
                            >
                                <Text style={Styles.TextButton}>Visualizar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
                }
            </ScrollView>
        </View >
    );
}

export default GenresScreen;
