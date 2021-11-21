import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Divider = () => <View style={styles.divider} />;

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: '#3334',
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
