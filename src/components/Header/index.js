import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image style={{width: 10}} source={require('../../assets/short-logo.png')} />
      <Text style={styles.text}>Playlists</Text>
      <Text style={styles.text}>Vídeos</Text>
      <Text style={styles.text}>Minha lista</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: '#fff',
  }
});

export default Header;