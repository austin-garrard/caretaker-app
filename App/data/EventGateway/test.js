import EventGateway from './index.js';

describe('Event Gateway', () => {

    it('should get all the events', () => {
        expect(EventGateway.getAll()).toEqual([
            {id: 1, startDate: 1498932000000, endDate: 1498935600000, date: 'July 1', time: '13:00-14:00', location: '6818 Austin Center Blvd, Austin, TX 78731', name: 'Chemotherapy', volunteerId: 'jack@coolwebsite.com', role: 'driver', description: ''},
            {id: 2, startDate: 1499097600000, endDate: 1499101200000, date: 'July 3rd', time: '11:00-12:00', location: '6818 Austin Center Blvd, Austin, TX 78731', name: 'Toxicity Check', volunteerId: 'sarah@emailprovider.com', role: 'driver', description: 'Quick check'},
            {id: 3, startDate: 1499261400000, endDate: 1499265000000, date: 'July 5th', time: '08:30-09:30', location: '1120 S Lamar Blvd, Austin, TX 78704', name: 'Checkin', volunteerId: 'TBD', role: 'active friend', description: ''},
            {id: 4, startDate: 1499403600000, date: 'July 7th', time: 'All Day', location: '1100 Congress Ave, Austin, TX 78701', name: 'Weekend', volunteerId: 'sarah@emailprovider.com', role: 'active friend', description: 'Need to keep busy'},
            {id: 5, startDate: 1499613300000, endDate: 1499620500000, date: 'July 9th', time: '10:15-12:15', location: '6818 Austin Center Blvd, Austin, TX 78731', name: 'Chemotherapy', volunteerId: 'TBD', role: 'driver', description: ''},
            {id: 6, startDate: 1499699700000, endDate: 1499706900000, date: 'July 10th', time: '10:15-12:15', location: '6818 Austin Center Blvd, Austin, TX 78731', name: 'Chemotherapy', volunteerId: 'austin@yeehaw.com', role: 'driver', description: ''}
        ]);
    });

    it('should notify subscribers when an event is picked up', () => {
        const subscriber = jest.fn();
        EventGateway.subscribeToUpdates(subscriber);

        EventGateway.pickUpEvent(1, 'austin@yeehaw.com');

        expect(subscriber).toHaveBeenCalled();
    })

    it('should notify subscribers when an event is dropped', () => {
        const subscriber = jest.fn();
        EventGateway.subscribeToUpdates(subscriber);

        EventGateway.dropEvent(1);

        expect(subscriber).toHaveBeenCalled();
    })

    it('should notify subscribers when an event is created', () => {
        const subscriber = jest.fn();
        EventGateway.subscribeToUpdates(subscriber);

        EventGateway.createNewEvent({some: 'data'});

        expect(subscriber).toHaveBeenCalled();
    })
})
