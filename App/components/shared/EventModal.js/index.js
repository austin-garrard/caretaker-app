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

export default class EventModal extends Component {
  _renderButton = (text, onPress) => (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text>{text}</Text>
        </View>
      </TouchableOpacity>
  );

  _renderModalContent = () => {
    const props = this.props;
    const event = props.event;
    return (
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>{event.name}</Text>

        <Text style={styles.modalInfo}>{event.date} {event.time}</Text>
        <Text style={styles.modalInfo}>{event.location}</Text>

        <Text style={styles.modalInfo}>{event.role}:{event.volunteer}</Text>

        <Text style={styles.modalInfo}>{event.description}</Text>
        {this._renderButton('Close', props.close())}
      </View>);
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

const styles = StyleSheet.create({
  modalContent: {
    margin: 13,
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
