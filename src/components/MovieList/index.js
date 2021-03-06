import React, { Fragment, useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Divider } from '@ui-kitten/components';
import { Api, Key, Image_base } from '../../Services/Api';
import { Styles } from './styles';

function MovieList() {
    const [list, setList] = useState([]);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function RequestList() {
            setLoading(true)
            try {
                const res = await Api.get(`/movie/popular?api_key=${Key}&&language=pt-BR&append_to_response=credits,videos,images&include_image_language=en,null`)
                setTimeout(() => setLoading(false), 2000);
                setList(res.data.results)
            } catch (err) {
                setLoading(false);
            }
        }
        RequestList();
    }, [])

    return (
        <Fragment>
            {loading && <ActivityIndicator size='large' color='#970E3E' />}
            {list.map((Items) =>
                <View
                    style={Styles.container}
                    key={Items.key}

                >
                    <Image 
                        source={{ uri: `${Image_base}${Items.poster_path}` }}
                        resizeMode='stretch' style={Styles.Imagem} 
                    />
                    <View style={Styles.ContainerTitle}>
                        <Text style={Styles.TitleMovie}>Titulo</Text>
                        <Text style={Styles.LegendMovie}>{Items.title}</Text>
                        <Divider />
                        <Text style={Styles.TitleMovie}>Nota IMDB</Text>
                        <Text style={Styles.LegendMovie}>{Items.vote_average}</Text>
                        <Divider />
                        <TouchableOpacity
                            style={Styles.Button}
                            onPress={() => navigation.navigate('CategoryDetailScreen', {
                                Title: Items.title,
                                Describe: Items.overview,
                                Date: Items.release_date,
                                Imdb: Items.vote_average,
                                Popularity: Items.popularity,
                                Photo: Items.poster_path, 
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
