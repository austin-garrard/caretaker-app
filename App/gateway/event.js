/*
  Makes API calls to fetch events.

  However, until there is an API to call, it returns canned data.
*/

export default class EventGateway {
  getAll() {
    return [
      {key: 1, date: 'July 1', time: '13:00-14:00', location: '6818 Austin Center Blvd, Austin, TX 78731', name: 'Chemotherapy', volunteer: 'Jack', role: 'driver', description: ''},
      {key: 2, date: 'July 3rd', time: '11:00-12:00', location: '6818 Austin Center Blvd, Austin, TX 78731', name: 'Toxicity Check', volunteer: 'Sarah', role: 'driver', description: 'Quick check'},
      {key: 3, date: 'July 5th', time: '08:30-09:30', location: '1120 S Lamar Blvd, Austin, TX 78704', name: 'Checkin', volunteer: 'TBD', role: 'active friend', description: ''},
      {key: 4, date: 'July 7th', time: 'All Day', location: '1100 Congress Ave, Austin, TX 78701', name: 'Weekend', volunteer: 'Sarah', role: 'active friend', description: 'Need to keep busy'},
      {key: 5, date: 'July 9th', time: '10:15-12:15', location: '6818 Austin Center Blvd, Austin, TX 78731', name: 'Chemotherapy', volunteer: 'TBD', role: 'driver', description: ''}
    ]
  }
}
