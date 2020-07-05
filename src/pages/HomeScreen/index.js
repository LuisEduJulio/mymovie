import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import FavoriteList from '../../components/FavoriteList';
import GenresList from '../../components/GenresList';
import SeveralList from '../../components/SeveralList';
import MovieList from '../../components/MovieList';
import TopratedList from '../../components/TopratedList';
import { Styles } from './styles';

function HomeScreen() {
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
          <FavoriteList />
        </ScrollView>
        <Text style={Styles.Title}>Genêros</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <GenresList />
        </ScrollView>
        <Text style={Styles.Title}>Melhores do IMDB</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <TopratedList />
        </ScrollView>
        <Text style={Styles.Title}>Lançamentos</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <SeveralList />
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

export default HomeScreen;