import React, { Fragment } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { List } from '../../Util/List';
import { Styles } from './styles';

function Several() {
    const navigation = useNavigation();

    return (
        <Fragment>
            {List.map((Items) =>
                <TouchableOpacity
                    style={Styles.container}
                    key={Items.key}
                    onPress={() => navigation.navigate('CategoryDetail', {
                        imagem: Items.imagem,
                        title: Items.title,
                    })}
                >
                    <Text style={Styles.Title}>{Items.title}</Text>
                    <Image source={Items.imagem} style={Styles.Imagem} />
                </TouchableOpacity>
            )
            }
        </Fragment >
    );
}

export default Several;
