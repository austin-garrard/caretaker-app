import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text, ScrollView } from 'react-native';
import styles from './styles';

import Header from './Header';
import Detail from './Detail';
import ActionButton from '../../material-ui/ActionButton';
import Button from '../../material-ui/Button';

export default function EventPage( { event, onClose, onAccept, onDrop, onEdit } ) {
  return <View style={styles.container}>
    <Header title={event.name} onClose={onClose} />
    <ScrollView style={styles.scrollbox}>
      <View style={styles.details}>
        <Detail center icon='schedule' text={event.date} />
        <Detail center icon='place' text={event.location} />
        <Detail center icon='person' text={event.volunteer} />
        <Detail icon='subject' text={event.description} />
      </View>
      <Button raised primary icon='done' text='Accept' onPress={onAccept} style={{container: styles.acceptBtn}} />
    </ScrollView>
    <ActionButton icon='mode-edit' onPress={onEdit} style={ {
      positionContainer: styles.editBtnPosition,
      container: styles.editBtn
    } } />
  </View>;
}

EventPage.propTypes = {
  event: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  onAccept: PropTypes.func,
  onDrop: PropTypes.func,
  onEdit: PropTypes.func
};
