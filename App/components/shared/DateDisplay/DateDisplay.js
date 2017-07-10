import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

const dayOfTheWeek = date => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()];

export default function DateDisplay( { date } ) {
  return <View style={styles.dateDisplay}>
    <Text style={styles.dateDisplayDate}>{date.getDate()}</Text>
    <Text style={styles.dateDisplayDay}>{dayOfTheWeek(date)}</Text>
  </View>;
}
