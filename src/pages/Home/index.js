import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import Favorite from '../../components/Favorite';
import Genres from '../../components/Genres';
import Several from '../../components/Several';
import MovieList from '../../components/MovieList';
import { Styles } from './styles';

function Home() {
  return (
    <View styles={Styles.container}>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
      >
        <Text style={Styles.Title}>Favoritos</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Favorite />
        </ScrollView>
        <Text style={Styles.Title}>Genêros</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Genres />
        </ScrollView>
        <Text style={Styles.Title}>Lançamentos</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Several />
        </ScrollView>
        <Text style={Styles.Title}>Diversos</Text>
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
        >
          <MovieList />
        </ScrollView>
      </ScrollView>
    </View>
  );
}

export default Home;