import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ContactProperties } from '../models/contact';

export const ContactListItem = ({
  smallImageURL,
  name,
  companyName,
  isFavorite
}: ContactProperties) => {
  const favoriteImg = isFavorite && require('../assets/favorite-true.png');

  return (
    <View style={styles.contactItemContainer}>
      <Image
        style={styles.tinyContactPhoto}
        source={{
          uri: smallImageURL
        }}
      />
      <View>
        <View style={styles.favoriteContainer}>
          {isFavorite && <Image style={styles.favoriteIcon} source={favoriteImg} />}
          <Text style={styles.contactName}>{name}</Text>
        </View>
        <Text>{companyName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contactItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  tinyContactPhoto: {
    width: 50,
    height: 50,
    marginRight: 25,
    borderRadius: 8
  },
  favoriteIcon: {
    width: 15,
    height: 15,
    marginRight: 5
  },
  favoriteContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  contactName: {
    fontSize: 18
  }
});
