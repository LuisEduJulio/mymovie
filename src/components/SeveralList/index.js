import React, { Fragment, useEffect, useState } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Api, Token, Key } from '../../Services/Api';
import { List } from '../../Util/List';
import { Styles } from './styles';

function SeveralList() {
    const [list, setList] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        async function RequestList() {
            const res = await Api.get(`movie/3/?api_key=${Key}&language=pt-BR`,
                { headers: { Authorization: `Bearer${Token}` } }
            );
            console.log(res);
            if (!res) {
                setList(res.data);
                console.log(list)
            } else {
                setList([])
                console.log('00')
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
                    <Text style={Styles.Title}>{Items.original_title}</Text>
                </TouchableOpacity>
            )
            }
        </Fragment >
    );
}

export default SeveralList;
