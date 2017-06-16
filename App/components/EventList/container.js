import React, {Component} from 'react';
import EventGateway from '../../gateway/event.js';


export var ContainerFor = (EventList) => class extends Component {
  constructor() {
    super();
    this.gateway = new EventGateway();
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    this.setState({events: this.gateway.getAll()});
  }

  render() {
    return <EventList events={this.state.events} />;
  }
}
