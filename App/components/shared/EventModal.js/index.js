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

    isAvailable(volunteer) {
        return volunteer === 'TBD';
    }

    isSelf(volunteer) {
        return volunteer === 'Jack';
    }

    isAdmin(volunteer) {
        return volunteer === 'Sarah';
    }

    _onPickUpEvent = () => alert('volunteered!');

    _onDropEvent = () => alert('un-volunteered :(');

    _onEditEvent = () => alert('edited!');

    _onExportToCalendar = () => alert('exported!');

    _renderPickUpEventbutton = (volunteer) => {
        if(this.isAvailable(volunteer)) {
            return this._renderButton('[pick up event]', this._onPickUpEvent);
        } else {
            return null;
        }
    }

    _renderDropEventButton = (volunteer) => {
        if(this.isSelf(volunteer)) {
            return this._renderButton('[drop event]', this._onDropEvent);
        } else {
            return null;
        }
    }

    _renderEditEventButton = (volunteer) => {
        if(this.isAdmin(volunteer)) {
            return this._renderButton('[edit event]', this._onEditEvent);
        } else {
            return null;
        }
    }

    _renderVolunteerInfo = (role, volunteer) => {
        return (
            <View>
                <Text style={styles.modalInfo}>{role}:{volunteer}</Text>
                {this._renderPickUpEventbutton(volunteer)}
                {this._renderDropEventButton(volunteer)}
            </View>
        );
    }

    _renderModalContent = () => {
        const props = this.props;
        const event = props.event;
        return (
            <View style={styles.modalContent}>
            {this._renderEditEventButton(event.volunteer)}
            {this._renderButton('[Export to Calendar]', this._onExportToCalendar)}
            <Text style={styles.modalTitle}>{event.name}</Text>

            <Text style={styles.modalInfo}>{event.date} {event.time}</Text>
            <Text style={styles.modalInfo}>{event.location}</Text>

            {this._renderVolunteerInfo(event.role, event.volunteer)}

            <Text style={styles.modalInfo}>{event.description}</Text>
            {this._renderButton('Close', props.close)}
            </View>
        );
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
