import React, {memo} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {ChatData} from '.';

interface Props {
  item: ChatData;
}

const Card: React.FC<Props> = ({item}) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item?.image}} style={styles.image} />
      </View>
      <View style={styles.lineView}>
        <View style={styles.titleContainer}>
          <Text style={styles.name}>{item?.name}</Text>
          <Text style={item?.notReaded > 0 ? styles.timeGreen : styles.time}>
            {item?.time}
          </Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description} numberOfLines={1}>
            {item?.isGroup ? `${item?.lastMessage?.sender}: ` : ''}
            {item?.lastMessage?.type === 'message'
              ? item?.lastMessage?.data
              : 'Foto'}
          </Text>

          {item?.muted ? (
            <MaterialCommunityIcons
              style={styles.mutedicon}
              color="#787878"
              name="volume-variant-off"
              size={25}
            />
          ) : null}

          {item?.notReaded > 0 ? (
            <View style={styles.totalMessagesContainer}>
              <Text style={styles.totalMessagesText}>{item?.notReaded}</Text>
            </View>
          ) : null}
        </View>
      </View>
      <View />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  listContainer: {
    flex: 1,
    paddingTop: 6,
  },
  cardContainer: {
    flexDirection: 'row',
    margin: 5,
  },
  imageContainer: {
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 65,
  },
  lineView: {
    flex: 1,
    marginLeft: 5,
    borderBottomColor: '#eaeaea',
    borderBottomWidth: 1,
    paddingRight: 15,
    justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  name: {
    color: '#222222',
    fontWeight: 'bold',
    fontSize: 17,
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    flex: 1,
    flexWrap: 'nowrap',
    color: '#787878',
    fontSize: 17,
    marginRight: 5,
    fontWeight: '900',
  },
  mutedicon: {
    marginRight: 8,
  },
  time: {
    color: '#787878',
  },
  timeGreen: {
    color: '#09d261',
    alignSelf: 'flex-start',
  },
  totalMessagesContainer: {
    minWidth: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalMessagesText: {
    backgroundColor: '#09d261',
    color: '#daf5e2',
    textAlignVertical: 'center',
    textAlign: 'center',
    padding: 2,
    lineHeight: 22,
    minHeight: 26,
    minWidth: 26,
    borderRadius: 26,
  },
  cameraIcon: {
    position: 'absolute',
    padding: 20,
    backgroundColor: 'rgba(0,204,63, 0.95)',
    borderRadius: 43,
    bottom: 16,
    right: 16,
    elevation: 3,
  },
});

export default memo(Card);
