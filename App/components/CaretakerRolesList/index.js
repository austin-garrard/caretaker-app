import React, {Component, PureComponent} from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {ContainerFor} from './container.js';

class MyListItem extends PureComponent {
    _onLongPress = ()  => alert('Insert Edit Caretaker Role Screen Here');

    _onPress = () => alert('Toggling Caretaker Role Action Here');

    render() {
        return (
            <TouchableOpacity
                onLongPress={this._onLongPress}
                onPress={this._onPress}>

                <View style={styles.button}>
                   <Text style={styles.item}>{this.props.name}: {this.props.description}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

class CaretakerRoleList extends Component {

    _renderItem = ({item}) => (
        <MyListItem
            id={item.id}
            onLongPress={this.props.onLongPressItem}
            onPress={this.onPress}
            name={item.name}
            description={item.description}
        />
    );

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                   data={this.props.caretakerRoles}
                   dataWhichCouldChange={this.props.caretakerRoles.map((caretakerRole) => caretakerRole.volunteer)}
                   renderItem={this._renderItem}
                   keyExtractor={(item) => item.id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
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
  }
});

export default ContainerFor(CaretakerRoleList);