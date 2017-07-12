import React from 'react';
import { View } from 'react-native';
import Toolbar from '../../material-ui/Toolbar';

import styles from './styles';

export default function ScreenWithToolbar({ title, navigation, children }) {
  return <View style={styles.container}>
    <Toolbar
      leftElement='menu'
      onLeftElementPress={() => navigation.navigate('DrawerOpen')}
      centerElement={title}
    />
    {children}
  </View>;
}
