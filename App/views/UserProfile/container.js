import React, { Component } from 'react';
import UserGateway from '../../data/UserGateway/';
import ScreenWithToolbar from '../../components/shared/ScreenWithToolbar';

export default ContainerFor = (UserProfile) => class extends Component {
    constructor() {
        super();
        this.state = {
            currentUser: {}
        }
    }

    componentDidMount() {
        this.setState({
            currentUser: UserGateway.currentUser
        });
    }

    render() {
        const user = this.state.currentUser;
        return <ScreenWithToolbar title='Profile' navigation={this.props.navigation}>
            <UserProfile
                name={user.name}
                email={user.identifier}
                phone={user.phone}
                notificationTypes={user.notificationTypes}
                notificationTriggers={user.notificationTriggers}
            />
        </ScreenWithToolbar>
    }
}
