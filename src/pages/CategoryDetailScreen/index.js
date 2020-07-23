import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image_base } from '../../Services/Api'
import Firebase from '../../Services/Firebase';
import { Styles } from './styles';

function CategoryDetailScreen({ route }) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        title: JSON.stringify(route.params.title),
        imdb: JSON.stringify(route.params.imdb),
        date: JSON.stringify(route.params.date),
        popularity: JSON.stringify(route.params.popularity),
        describe: JSON.stringify(route.params.describe),
        photo: JSON.stringify(route.params.photo),
      });
    const navigation = useNavigation();
    console.log(JSON.stringify(title));
    async function createFavorite(e) {
        e.preventDefault();
        
        setLoading(true)
        const uid = Firebase.getCurrentUid();
        console.log(data)
        console.log(route.params)
        try {
            await Firebase.app.ref('favorite').child(uid).set({
                title: data.title,
                imdb: data.imdb,
                photo: data.photo,
                date: data.date,
                describe: data.describe,
                popularity: data.popularity
            });

            setTimeout(() => setLoading(false), 2000);
            Alert.alert('Adionado aos favoritos!');
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
        setLoading(false);
    }

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
            <ScrollView>
                <View style={Styles.Card}>
                    <View style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                        <Image source={{ uri: `${Image_base}${route.params.Photo}` }} style={Styles.Imagem} />
                        <View style={Styles.containerDetail}>
                            <Text style={Styles.Title}>Titulo</Text>
                            <Text style={Styles.Legend}>{route.params.Title}</Text>
                            <Text style={Styles.Title}>Ano</Text>
                            <Text style={Styles.Legend}>{route.params.Date}</Text>
                            <Text style={Styles.Title}>IMDB</Text>
                            <Text style={Styles.Legend}>{route.params.Imdb}</Text>
                            <Text style={Styles.Title}>Popularidade</Text>
                            <Text style={Styles.Legend}>{route.params.Popularity}</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={createFavorite}
                        style={Styles.ButtonFavorite}
                    >
                       <AntDesign name="heart" size={24} color="#970E3E" />
                    </TouchableOpacity>
                    {loading && <ActivityIndicator size='large' color='#970E3E' />}
                    <View>
                        <Text style={Styles.TextDescribe}><Text style={Styles.Bold}>Sinopse: </Text>{route.params.Describe}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default CategoryDetailScreen;