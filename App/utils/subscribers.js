export default createSubscribers = () => {
    const subscribers = [];

    return {
        add: (callback) => {
            subscribers.push(callback)
        },
        notify: () => {
            subscribers.forEach((subscriber) => subscriber());
        }
    };
}
