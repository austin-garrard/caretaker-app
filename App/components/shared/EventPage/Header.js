import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import styles from './styles';
import Toolbar from '../../material-ui/Toolbar';

const renderTitle = (title) => <View style={styles.titleContainer}>
  <Text style={styles.title}>{title}</Text>
</View>;

export default function Header( { title, onClose } ) {
  return <Toolbar
    leftElement='close'
    onLeftElementPress={onClose}
    centerElement={renderTitle(title)}
    numberOfLines='dynamic'
    style={ {
      container: styles.header,
    } }
  />;
}

Header.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func
};
