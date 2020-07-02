import React, { Fragment, useEffect, useState } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import { List } from '../../Util/List';
import { Api, token } from '../../Services/Api'
import { Styles } from './styles';

function Genres() {
    const [list, setList] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        async function requestGenres() {
            try {
                const res = await Api.get(`/movie/157336?api_key=${token}`).then();
                console.log(res);

                if (res.val()) {
                    let datalist = []
                    res.forEach((e) => {
                        datalist.push(e.val())
                    })
                    setList(datalist);
                    console.log(datalist)
                } else {
                    setList([]);
                }

            } catch (err) {

            }
        }
        requestGenres();
    }, [])

    return (
        <Fragment>
            {list.map((Items) =>
                <TouchableOpacity
                    style={Styles.container}
                    key={Items.id}
                >
                    <Text style={Styles.Title}>{Items.title}</Text>
                </TouchableOpacity>
            )}
        </Fragment >
    );
}

export default Genres;
