import React, {Component} from 'react';
import {View} from 'react-native';
import UserGateway from '../../data/UserGateway/';
import CommunityAdminModal from './modal.js';

export default ContainerFor = (CommunityAdmin) => class extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            isModalVisible: false,
            newUserEmail: ''
        }
    }

    componentDidMount() {
        let newState = this.state;
        newState.users = UserGateway.getAll();
        this.setState(newState);
    }

    _onShowModal = () => {
        let newState = this.state;
        newState.isModalVisible = true;
        this.setState(newState);
    }

    _onHideModal = () => {
        let newState = this.state;
        newState.isModalVisible = false;
        this.setState(newState);
    }

    _onUpdateEmail = (email) => {
        let newState = this.state;
        newState.newUserEmail = email;
        this.setState(newState);
    }

    _onSubmitEmail = () => {
        this._onHideModal();
        UserGateway.inviteUser(this.state.newUserEmail);
    }

    render() {
        const modal = <CommunityAdminModal
            visible={this.state.isModalVisible}
            onUpdateEmail={this._onUpdateEmail}
            onSubmitEmail={this._onSubmitEmail}
            onHideModal={this._onHideModal}
        />;

        return (
            <CommunityAdmin
                users={this.state.users}
                onShowModal={this._onShowModal}
                modal={modal}
            />
        )
    }
}
