export default Subject = (target) => {
    const subscribers = [];

    return Object.assign(target, {
        subscribeToUpdates: (subscriber) => {
            subscribers.push(subscriber)
        },
        notifySubscribers: () => {
            subscribers.forEach((subscriber) => subscriber())
        }
    });
}
