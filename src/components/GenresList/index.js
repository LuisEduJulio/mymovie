import React, { Fragment } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GenresList } from '../../Util/Genres';
import { Styles } from './styles';

function GenresLis() {
    const navigation = useNavigation();

    return (
        <Fragment>
            {GenresList.map((Items) =>
                <View
                    style={Styles.container}
                    key={Items.key}
                    onPress={() => navigation.navigate('GenresScreen', {
                        title: Items.title,
                    })}
                >   
                    <Image source={Items.imagem} style={Styles.Imagem} />
                    <Text style={Styles.Title}>{Items.title}</Text>
                </View>
            )}
        </Fragment>
    );
}

export default GenresLis;
