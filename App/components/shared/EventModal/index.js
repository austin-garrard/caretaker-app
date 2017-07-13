import React, {Component} from 'react';
import {
    Button,
    FlatList,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {ContainerFor} from './container.js';
import EventPage from '../EventPage';

class EventModal extends Component {

    _renderModalContent = () => {
      const props = this.props;
      const event = props.event;
      return <EventPage
        event={event}
        onClose={props.onClose}
        onAccept={props.onPickUpEvent}
        onDrop={props.onDropEvent}
        onEdit={props.onEditEvent}
      />;
    };

    render() {
        return (
            <Modal visible={this.props.visible}
                animationType={"fade"}
                transparent={false}
                onRequestClose={() => {alert("Modal has been closed.")}}>
                {this._renderModalContent()}
            </Modal>
        );
  }
}

export default ContainerFor(EventModal);

const styles = StyleSheet.create({
  modalContent: {
    margin: 13,
    justifyContent: 'center'
  },
  modalTitle: {
    fontSize: 24,
    textAlign: 'center',
    margin: 15
  },
  modalInfo: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10
  }
});
