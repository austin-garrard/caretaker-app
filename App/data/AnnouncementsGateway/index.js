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
                {id: 1, date: 1493596800000, title: '1st Treatment Success', description: 'Woo, go us'},
                {id: 2, date: 1493942400000, title: '2nd Treatment Delayed', description: 'Boo'},
                {id: 3, date: 1494115200000, title: 'Need Help', description: 'Send lemons'},
                {id: 4, date: 1494115200000, title: 'I have a need', description: 'It\'s very complicated, and I\'m not sure exactly how to put it into words, but if I had to approximate it, I would probably first request a piping cup of tea and some crackers, as it would take some time and I would be loath to do my description a disservice by unduly interrupting it with breaks for necessaries.\n\nThen, with the implements of storytelling in hand, I would proceed to warm up with an oh-so-brief description of the setting, of that hot summer day on which my conundrum began. It\'s very important for you, or anyone else who listens to my tale, to understand the environment in which these events took place, otherwise true understanding will evade you. I would say that in order to accurately transfer the feelings and emotions that I have built up around these extraordinary happenings, the listener themselves must prepare to embark on a journey, and thus procure for themselves their own tea.'}
            ]
        }
        return this.allAnnouncements;
    }
}
