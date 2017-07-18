import React from 'react';
import { View } from 'react-native';
import { ContainerFor } from './container.js';
import Stuff from '../shared/EventList';
import ActionButton from '../material-ui/ActionButton';

import styles from './styles';

class EventList extends React.Component {
  _onCreateEvent = () => {
    this.props.onCreateEvent({some: 'data'});
  }

  render() {
    return <View style={styles.container}>
      <Stuff events={this.props.events} />
      <ActionButton onPress={this._onCreateEvent} />
    </View>;
  }
}

export default ContainerFor(EventList);
