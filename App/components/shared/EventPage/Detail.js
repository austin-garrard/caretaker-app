import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import styles from './styles';
import ListItem from '../../material-ui/ListItem';

export default function Detail( { text, icon, center } ) {
  return <ListItem
    leftElement={icon}
    centerElement={<Text style={styles.detailText}>{text}</Text>}
    style={ {
      container: styles.detail,
      contentViewContainer: {
        alignItems: center ? 'center' : 'flex-start'
      }
    } }
  />;
}

Detail.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  center: PropTypes.bool
};
