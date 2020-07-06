import React, { Fragment, useEffect, useState } from 'react';
import { TouchableOpacity, Text, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Api, Key, Image_base } from '../../Services/Api';
import Img from '../../assets/vazio.png'
import { Styles } from './styles';

function TopratedList() {
    const [list, setList] = useState([]);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function RequestList() {
            setLoading(true)
            try {
                const res = await Api.get(`/movie/top_rated?api_key=${Key}&&language=pt-BR&append_to_response=credits,videos,images&include_image_language=en,null`)
                setTimeout(() => setLoading(false), 2000);
                setList(res.data.results)
                console.log(list);
            } catch (err) {
                setLoading(false)
            }
        }
        RequestList();
    }, [])


    return (
        <Fragment>
            {loading && <ActivityIndicator size='large' color='#970E3E' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />}
            {list.map((Items) =>
                <TouchableOpacity
                    style={Styles.container}
                    onPress={() => navigation.navigate('CategoryDetailScreen', {
                        Title: Items.title,
                        Describe: Items.overview,
                        Date: Items.release_date,
                        Imdb: Items.vote_average,
                        Popularity: Items.popularity,
                        Photo: Items.poster_path,
                    })}
                >
                    <Image
                        source={{ uri: `${Image_base}${Items.poster_path}` }}
                        resizeMode='stretch'
                        style={Styles.Imagem}
                    />
                    <Text style={Styles.Title}>{Items.title}</Text>
                </TouchableOpacity>

            )}
        </Fragment >
    );
}

export default TopratedList;
