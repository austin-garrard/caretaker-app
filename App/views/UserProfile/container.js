import React, { Component } from 'react';
import UserGateway, { NotificationTypes } from '../../data/UserGateway/';
import ScreenWithToolbar from '../../components/shared/ScreenWithToolbar';
import { createUserSettings, User } from '../../data/UserGateway';

export default ContainerFor = (UserProfile) => class extends Component {
    constructor() {
        super();
        this.state = {
            currentUser: this.process(new User())
        }
    }

    componentDidMount() {
        this.setState({
            currentUser: this.process(UserGateway.getCurrentUser())
        });
    }

    process(user) {
        let settings = createUserSettings();
        Object.keys(settings).forEach(key => {
            settings[key].value = user.notificationTypes.includes(key) || user.notificationTriggers.includes(key);
        })
        return user.set('settings', settings);
    }

    toggle = (key) => () => {
        let user = this.state.currentUser;
        const currentValue = user.settings[key].value
        user.settings[key].value = !currentValue;
        this.setState({currentUser: user});
    }

    render() {
        const user = this.state.currentUser;
        return <ScreenWithToolbar title='Profile' navigation={this.props.navigation}>
            <UserProfile
                name={user.name}
                email={user.identifier}
                phone={user.phone}
                settings={user.settings}
                toggle={this.toggle}
            />
        </ScreenWithToolbar>
    }
}
