import React, { Fragment, useState, useEffect } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Firebase from '../../Services/Firebase';
import { Styles } from './styles';

function FavoriteList() {
    const [list, setList] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        async function getFavorite() {
            const uid = Firebase.getCurrentUid();
            try {
                const response = await Firebase.app.ref('favorite').orderByChild('uid');
                let res = await response.equalTo(uid).once('value');

                if (res.val()) {
                    let datalist = []
                    res.forEach((e) => {
                        datalist.push({ key: e.key, ...e.val() })
                    })
                    setList(datalist)
                } else setList([])
            } catch (err) {
                console.log(err)
            }
        }
        getFavorite();
    }, []);

    return (
        <Fragment>
            {list.map((Items) =>
                <TouchableOpacity
                    style={Styles.container}
                    key={Items.key}
                    onPress={() => navigation.navigate('CategoryDetailScreen', {
                        imagem: Items.photo,
                        title: Items.title,
                    })}
                >
                    <Image source={{ uri: `${Image_base}${Items.photo}` }} style={Styles.Imagem} />
                    <Text style={Styles.Title}>{Items.title}</Text>
                </TouchableOpacity>
            )
            }
        </Fragment >
    );
}

export default FavoriteList;
