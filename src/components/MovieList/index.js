import React, { Fragment } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Divider, Button } from '@ui-kitten/components';
import { List } from '../../Util/List';
import { Styles } from './styles';

function MovieList() {
    const navigation = useNavigation();

    return (
        <Fragment>
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
                            onPress={() => navigation.navigate('CategoryDetailScreen', {
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
        </Fragment >
    );
}

export default MovieList;
