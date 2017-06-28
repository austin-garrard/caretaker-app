/*
  Makes API calls to fetch caretaker roles.

  However, until there is an API to call, it returns canned data.
*/

export default class AnnouncementsGateway {

    static allAnnouncements = null;

    static getAll() {
        if(this.allAnnouncements === null) {
            //api call to get roles
            this.allAnnouncements = [
                {id: 1, date: '2017-05-01', title: '1st Treatment Success', description: 'Woo, go us'},
                {id: 2, date: '2017-05-05', title: '2nd Treatment Delayed', description: 'Boo'},
                {id: 3, date: '2017-05-07', title: 'Need Help', description: 'Send lemons'}
            ]
        }
        return this.allAnnouncements;
    }
}
