import React, { Fragment } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GenresList } from '../../Util/Genres';
import { Styles } from './styles';

function Genres() {
    const navigation = useNavigation();

    return (
        <Fragment>
            {GenresList.map((Items) =>
                <TouchableOpacity
                    style={Styles.container}
                    key={Items.key}
                    onPress={() => navigation.navigate('GenresScreen', {
                        title: Items.title,
                    })}
                >   
                    <Image source={Items.imagem} style={Styles.Imagem} />
                    <Text style={Styles.Title}>{Items.title}</Text>
                </TouchableOpacity>
            )}
        </Fragment>
    );
}

export default Genres;
