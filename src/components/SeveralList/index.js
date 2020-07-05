import React, { Fragment, useEffect, useState } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Api, Key } from '../../Services/Api';
import { Styles } from './styles';

function SeveralList() {
    const [list, setList] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        async function RequestList() {
            try {
                const res = await Api.get(`/movie/popular?api_key=${Key}&&language=pt-BR&append_to_response=credits,videos,images&include_image_language=en,null`)
                setList(res.data.results)
                console.log(list);
            } catch (err) {

            }
        }
        RequestList();
    }, [])


    return (
        <Fragment>
            {list.map((Items) =>
                <TouchableOpacity
                    style={Styles.container}
                    onPress={() => navigation.navigate('CategoryDetailScreen', {
                        Title: Items.title,
                        Describe: Items.overview,
                        Date: Items.release_date,
                        Imdb: Items.vote_average,
                        Popularity: Items.popularity,
                        Photo: Items.backdrop_path, 
                    })}
                >
                    <Image 
                        source={{ uri: JSON.stringify(Items.backdrop_path) }}
                        resizeMode='stretch' 
                        style={Styles.Imagem} 
                    />
                    <Text style={Styles.Title}>{Items.title}</Text>
                    
                    <Text style={Styles.Title}>{Items.runtime}</Text>
                </TouchableOpacity>

            )}
        </Fragment >
    );
}

export default SeveralList;
