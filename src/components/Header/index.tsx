import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ZapZap</Text>
      <View style={styles.actions}>
        <EvilIcons onPress={() => {}} name="search" size={26} color="#FFF" />
        <SimpleLineIcons
          style={styles.menu}
          onPress={() => {}}
          name="options-vertical"
          size={16}
          color="#FFF"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.096,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#075E54',
    borderWidth: 0,
  },
  actions: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  menu: {
    marginLeft: 18,
    marginRight: 5,
  },
  title: {
    flex: 1,
    marginLeft: 16,
    color: 'rgba(255, 255, 255, 0.95)',
    fontWeight: 'bold',
    fontSize: 22,
  },
});

export default Header;
