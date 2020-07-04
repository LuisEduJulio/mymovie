import React, { Fragment } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { List } from '../../Util/List';
import { Styles } from './styles';

function FavoriteList() {
    const navigation = useNavigation();
    
    return (
        <Fragment>
            {List.map((Items) =>
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
