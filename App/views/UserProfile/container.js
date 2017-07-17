import React, { Component } from 'react';
import UserGateway, { NotificationTypes } from '../../data/UserGateway/';
import ScreenWithToolbar from '../../components/shared/ScreenWithToolbar';
import { createUserSettings, User } from '../../data/UserGateway';

export default ContainerFor = (UserProfile) => class extends Component {
    constructor() {
        super();
        const defaultUser = new User();
        this.state = {
            currentUser: defaultUser,
            settings: this.settingsFor(defaultUser)
        }
    }

    componentDidMount() {
        const user = UserGateway.getCurrentUser()
        this.setState({
            currentUser: user,
            settings: this.settingsFor(user)
        });
    }

    settingsFor(user) {
        let settings = createUserSettings();
        Object.keys(settings).forEach(key => {
            settings[key].value = user.notificationTypes.includes(key) || user.notificationTriggers.includes(key);
        })
        return settings;
    }

    toggle = (key) => () => {
        let settings = this.state.settings;
        const currentValue = settings[key].value
        settings[key].value = !currentValue;
        UserGateway.updateSettings(key, !currentValue);
        this.setState({
            currentUser: this.state.currentUser,
            settings: settings
        });
    }

    render() {
        const user = this.state.currentUser;
        return <ScreenWithToolbar title='Profile' navigation={this.props.navigation}>
            <UserProfile
                name={user.name}
                email={user.identifier}
                phone={user.phone}
                settings={this.state.settings}
                toggle={this.toggle}
            />
        </ScreenWithToolbar>
    }
}
