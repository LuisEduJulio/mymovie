import React, { Fragment, useState, useEffect } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { List } from '../../Util/List';
import { Styles } from './styles';

function FavoriteList() {
    const [list, setList] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        async function RequestList() {
            try {
                const res = await Api.get(`/account/favorite/movies?api_key=${Key}&&language=pt-BR&append_to_response=credits,videos,images&include_image_language=en,null`)
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
                    key={Items.key}
                    onPress={() => navigation.navigate('CategoryDetailScreen', {
                        imagem: Items.imagem,
                        title: Items.title,
                    })}
                >
                    <Image source={Items.imagem} style={Styles.Imagem} />
                    <Text style={Styles.Title}>{Items.title}</Text>
                </TouchableOpacity>
            )
            }
        </Fragment >
    );
}

export default FavoriteList;
