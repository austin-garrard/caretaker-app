import React, {Component} from 'react';
import UserGateway from '../../data/UserGateway/';

export default ContainerFor = (CommunityAdmin) => class extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.setState({users: UserGateway.getAll()})
    }

    render() {
        return (
            <CommunityAdmin
                users={this.state.users}
            />
        )
    }
}
