export const createSubscribers = () => {
    const subscribers = [];

    return {
        add: (callback) => {
            subscribers.push(callback);
        },
        notify: () => {
            subscribers.forEach((subscriber) => subscriber());
        }
    };
}

export const withSubscribers = (factory) => {
    const subscribers = createSubscribers();
    const target = factory(subscribers);

    return Object.assign(target, {
        subscribeToUpdates: (callback) => {
            subscribers.add(callback);
        }
    });
}
