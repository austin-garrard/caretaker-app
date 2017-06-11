/*
  Makes API calls to fetch events.

  However, until there is an API to call, it returns canned data.
*/

export default class EventGateway {
  getAll() {
    return [
      {key: 1, date: 'July 1', name: 'Chemotherapy', volunteer: 'Jack'},
      {key: 2, date: 'July 3rd', name: 'Toxicity Check', volunteer: 'TBD'},
      {key: 3, date: 'July 7th', name: 'Weekend', volunteer: 'Sarah'}
    ]
  }
}
