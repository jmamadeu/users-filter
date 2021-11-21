import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type ContactDetailSectionProps = {
  data: {
    title: string;
    value: string;
    subTitle?: string;
  };
};

export function ContactDetailSection({
  data: { subTitle, title, value }
}: ContactDetailSectionProps) {
  return (
    <View style={styles.detailContainer}>
      <Text>{title}</Text>

      <View style={styles.secondContainer}>
        <Text style={styles.value}>{value}</Text>
        <Text>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    marginVertical: 10
  },
  secondContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
