import React from 'react';
import PropTypes from 'prop-types';
import {
    FlatList,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import UserGateway, { Permissions } from '../../data/UserGateway';
import renderif from '../../utils/renderif.js';

import container from './RoleItem.container';
import ListItem from '../material-ui/ListItem';

export class RoleItem extends React.PureComponent {
  render() {
    const {
      name,
      description,
      hasRole,
      isHelper,
      onLongPress,
      onToggleSwitch
    } = this.props;

    return <TouchableOpacity onLongPress={onLongPress}>
      <ListItem
        centerElement={ {
          primaryText: name,
          secondaryText: description
        } }
        rightElement={renderif(isHelper, <Switch value={hasRole} onValueChange={onToggleSwitch} />)}
      />
    </TouchableOpacity>;
  }
}

RoleItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  hasRole: PropTypes.bool,
  isHelper: PropTypes.bool,
  onLongPress: PropTypes.func,
  onToggleSwitch: PropTypes.func
};

export default container(RoleItem);
