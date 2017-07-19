import React, {Component} from 'react';
import CaretakerRolesGateway from '../../data/CaretakerRolesGateway';

export var ContainerFor = (CaretakerRoleList) => class extends Component {
    constructor() {
        super();
        this.state = {
            caretakerRoles: [],
            visibleModal: false,
            selectedRole: null,
        };
    }

    updateRoles = () => {
        CaretakerRolesGateway.getAll().then(caretakerRoles => {
          let newState = Object.assign({}, this.state);
          newState.caretakerRoles = caretakerRoles;
          this.setState(newState);
        });
    }

    componentDidMount() {
        this.updateRoles();
    }

    _onPressItem = (roleId) => {
        let newState = this.state;
        newState.visibleModal = true;
        newState.selectedRole = newState.caretakerRoles.find((role) => role.id === roleId)
        this.setState(newState);
    };

    _onCloseModal = () => {
        let newState = this.state;
        newState.visibleModal = false;
        this.setState(newState);
    }

    render() {
        return <CaretakerRoleList
            caretakerRoles={this.state.caretakerRoles}
            visibleModal={this.state.visibleModal}
            selectedRole={this.state.selectedRole}
            onPressItem={this._onPressItem}
            onCloseModal={this._onCloseModal}
        />;
    }
}
