import React from 'react';
import { View, ScrollView } from 'react-native';
import Category from '../../components/Category';
import Genres from '../../components/Genres';
import { Styles } from './styles';



function Home() {
  return (
    <View styles={Styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <Category />
      </ScrollView>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <Genres />
      </ScrollView>
    </View>
  );
}

export default Home;