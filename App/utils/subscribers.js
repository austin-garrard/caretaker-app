export const createSubscribers = () => {
    const subscribers = [];

    return {
        add: function(callback) {
            subscribers.push(callback);
        },
        remove: function(callback) {
            const index = subscribers.indexOf(callback);
            if(index != -1) {
            	subscribers.splice(index, 1);
            }
        },
        notify: function() {
            subscribers.forEach((subscriber) => subscriber());
        }
    };
}

export const withSubscribers = (factory) => {
    const subscribers = createSubscribers();
    const target = factory(subscribers);

    return Object.assign(target, {
        subscribe: function(callback) {
            subscribers.add(callback);
        },
        unsubscribe: function(callback) {
            subscribers.remove(callback);
        }
    });
}
