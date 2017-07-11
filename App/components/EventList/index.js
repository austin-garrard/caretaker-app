import React, {Component, PureComponent} from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { ActionButton } from 'react-native-material-ui';
import {ContainerFor} from './container.js';
import EventModal from '../shared/EventModal/';
import DateDisplay from '../shared/DateDisplay';
import EventSummaryBox from '../shared/EventSummaryBox';

class MyListItem extends PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={[styles.button, styles.eventBox]}>
                  <DateDisplay date={this.props.startDate} />
                  <EventSummaryBox name={this.props.name} volunteer={this.props.volunteer} />
                </View>
            </TouchableOpacity>
        );
    }
}

class EventList extends Component {

    _renderItem = ({item}) => (
        <MyListItem
            id={item.id}
            onPressItem={this.props.onPressItem}
            title={item.title}
            startDate={new Date(item.startDate)}
            endDate={new Date(item.startDate)}
            date={item.date}
            name={item.name}
            volunteer={item.volunteer}
        />
    );

    _onCreateEvent = () => {
      this.props.onCreateEvent({some: 'data'});
    }

    render() {
        return (
            <View style={styles.container}>
                <EventModal
                    event={this.props.selectedEvent}
                    visible={this.props.visibleModal}
                    onClose={this.props.onCloseModal}
                />
                <FlatList
                   style={styles.eventList}
                   data={this.props.events}
                   dataWhichCouldChange={this.props.events.map((event) => event.volunteer)}
                   renderItem={this._renderItem}
                   keyExtractor={(item) => item.id}
                />
                <ActionButton onPress={this._onCreateEvent} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 15,
  },
  item: {
    fontSize: 20,
    textAlign: 'left',
    margin: 13,
  },
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
  },
  eventBox: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 0,
    marginLeft: 8,
    marginRight: 8
  },
  eventList: {
    backgroundColor: '#FFF'
  }
});

export default ContainerFor(EventList);
