import React, { Component } from 'react';
import AnnouncementsGateway from '../../data/AnnouncementsGateway/';
import UserGateway from '../../data/UserGateway/';

export default ContainerFor = (Announcements) => class extends Component {
    constructor() {
        super();
        this.state = {
            announcements: [],
            isUserAdmin: false
        }
    }

    componentDidMount() {
        this.setState({
            announcements: AnnouncementsGateway.getAll(),
            isUserAdmin: UserGateway.isAdmin()
        });
    }

    _onAddAnnouncement = () => {
        alert('announcement added!');
    }

    _onEditAnnouncement = () => {
        if(this.state.isUserAdmin) {
            alert('announcement edited!')
        }
    }

    render() {
        return (
            <Announcements
                announcements={this.state.announcements}
                isUserAdmin={this.state.isUserAdmin}
                onAddAnnouncement={this._onAddAnnouncement}
                onEditAnnouncement={this._onEditAnnouncement}
            />
        )
    }
}
