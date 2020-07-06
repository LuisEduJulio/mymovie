import React, { useEffect, useState, } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Divider } from '@ui-kitten/components';
import { Ionicons } from '@expo/vector-icons';
import Firebase from '../../Services/Firebase';
import { Styles } from './styles';

function PerfilScreen() {
    const [user, setUser] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        async function getUser() {
            const uid = Firebase.getCurrentUid();
            console.log(uid)
            try {
                const reponse = await Firebase.app.ref('usuarios').child(uid);
                let res = await reponse.once('value');

                if (res.val()) {
                    let datalist = []
                    res.forEach((e) => {
                        datalist.push(e.val())
                    })
                    setUser([])
                    setUser(datalist)
                } else {
                    setUser([])
                }

            } catch (err) {
                console.log(err)
            }
        }
        getUser();
    }, []);
    return (
        <View style={Styles.container}>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={Styles.topContainer}
                >
                    <Ionicons name="md-arrow-round-back" size={24} color="#FFF" style={Styles.Icon} />
                </TouchableOpacity>
            </View>
            <View style={Styles.containerText}>
                <Text style={Styles.TextTitle}>E-mail</Text>
                <Text style={Styles.TextLegend}>{user[0]}</Text>
                <Divider style={Styles.Divider} />
                <Text style={Styles.TextTitle}>Nome</Text>
                <Text style={Styles.TextLegend}>{user[1]}</Text>
                <Divider style={Styles.Divider} />
            </View>
        </View>
    );
};

export default PerfilScreen;