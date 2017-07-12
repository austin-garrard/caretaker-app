import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

export default function EventSummaryBox( { name, volunteer } ) {
  return <View style={styles.container}>
    <Text style={[styles.text, styles.name]}>{name}</Text>
    <Text style={[styles.text, styles.volunteer]}>{volunteer}</Text>
  </View>;
}
