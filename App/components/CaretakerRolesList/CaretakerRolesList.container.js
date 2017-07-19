import React from 'react';
import CaretakerRolesGateway from '../../data/CaretakerRolesGateway';
import UserGateway, { Permissions } from '../../data/UserGateway';

export default container = (List) => class extends React.Component {
  constructor() {
    super();
    this.state = {
      caretakerRoles: [],
      permissions: null,
      userRoles: []
    };
  }

  updateRoles = () => {
    const caretakerRoles = CaretakerRolesGateway.getAll();
    return { caretakerRoles };
  }

  updatePermissions = () => {
    const permissions = UserGateway.getCurrentPermissions();
    return { permissions };
  }

  updateUserRoles = () => {
    const userRoles = UserGateway.getRoles();
    return { userRoles };
  }

  componentDidMount() {
    let newState = Object.assign({}, this.state);
    Object.assign(newState, this.updateRoles());
    Object.assign(newState, this.updatePermissions());
    Object.assign(newState, this.updateUserRoles());
    this.setState(newState);
  }

  isHelper = () => this.state.permissions !== Permissions.FOCUS;

  userHasRole = (role) => {
    const words = this.state.userRoles.map(v => v.toLowerCase());
    return words.indexOf(role.toLowerCase()) >= 0;
  }

  render() {
    return <List
      caretakerRoles={this.state.caretakerRoles}
      isHelper={this.isHelper()}
      userHasRole={this.userHasRole}
    />;
  }
}
