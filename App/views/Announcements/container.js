import React, { Component } from 'react';
import AnnouncementsGateway from '../../data/AnnouncementsGateway/';


export default ContainerFor = (Announcements) => class extends Component {
    constructor() {
        super();
        this.state = {
            announcements: []
        }
    }

    componentDidMount() {
        this.setState({announcements: AnnouncementsGateway.getAll()});
    }

    render() {
        return (
            <Announcements
                announcements={this.state.announcements}
            />
        )
    }
}
