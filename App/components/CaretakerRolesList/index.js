import React, {Component, PureComponent} from 'react';
import {
    FlatList,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {ContainerFor} from './container.js';
import UserGateway from '../../data/UserGateway';

class MyListItem extends PureComponent {
    constructor() {
        super();
        this.state = {
            switchValue: null
        }
    }

    componentDidMount() {
        this.state.switchValue = this.props.hasRole;
    }

    _onLongPress = ()  => alert('Insert Edit Caretaker Role Screen Here');

    _onPress = () => alert('Toggling Caretaker Role Action Here');

    toggleSwitch(value, name) {
        alert('Should toggle caretaker role ' + name + ' to ' + value);
        this.props.hasRole = value
        this.setState({ switchValue: value });
    }

    render() {
        return (
            <TouchableOpacity
                onLongPress={this._onLongPress}>
                <View style={styles.button}>
                    <Switch
                        onValueChange={(value) => this.toggleSwitch(value, this.props.name)}
                        value = {this.state.switchValue}
                    />
                   <Text style={styles.item}>{this.props.name}: {this.props.description}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

class CaretakerRoleList extends Component {
    constructor() {
        super();
        this.state = {
            roles: []
        }
    }

    componentDidMount() {
        var roles = UserGateway.getRoles();
        this.state.roles = roles;
    }

    isActiveRole(item) {
        var words = this.state.roles.map(v => v.toLowerCase());
        var hasRole = words.indexOf(item.name.toLowerCase()) >= 0;
        return hasRole;
    }

    _renderItem = ({item}) => (
        <MyListItem
            id={item.id}
            onLongPress={this.props.onLongPressItem}
            hasRole={this.isActiveRole(item)}
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