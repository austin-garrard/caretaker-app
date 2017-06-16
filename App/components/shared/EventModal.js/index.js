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

  _renderModalContent = () => (
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>{this.props.event.name}</Text>

        <Text style={styles.modalInfo}>{this.props.event.date} {this.props.event.time}</Text>
        <Text style={styles.modalInfo}>{this.props.event.location}</Text>

        <Text style={styles.modalInfo}>{this.props.event.role}:{this.props.event.volunteer}</Text>

        <Text style={styles.modalInfo}>{this.props.event.description}</Text>
        {this._renderButton('Close', this.props.close())}
      </View>
  );

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
