import UpdateNotifier from './index.js';

describe('Subject', () => {
    it('should not couple different notifiers', () => {
        const subscriber1 = jest.fn();
        const subject1 = UpdateNotifier({});
        const subscriber2 = jest.fn();
        const subject2 = UpdateNotifier({});

        subject1.subscribeToUpdates(subscriber1);
        subject1.notifySubscribers();

        expect(subscriber1).toHaveBeenCalled();
        expect(subscriber2).not.toHaveBeenCalled();
    });
})
