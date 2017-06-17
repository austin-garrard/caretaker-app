

class Permissions {
    static FOCUS = 'focus';
    static ADMIN = 'admin';
    static HELPER = 'helper;';
    static NONE = 'none;'
}

export default class UserGateway {

    static currentUser = null;
    static allUsers = null;

    static getAll() {
        if(this.allUsers === null) {
            //api call goes here
            this.allUsers = [
                {name: 'Sarah', identifier: 'sarah@emailprovider.com', permission: Permissions.FOCUS},
                {name: 'Caroline', identifier: 'caroline@woahdude.com', permission: Permissions.ADMIN},
                {name: 'Jack', identifier: 'jack@coolwebsite.com', permission: Permissions.HELPER},
                {name: 'Austin', identifier: 'austin@yeehaw.com', permission: Permissions.HELPER},
                {name: 'TBD', identifier: 'TBD', permission: Permissions.NONE}
            ]
        }
        return this.allUsers;
    }

    static getName(identifier) {
        return this.allUsers.find((user) => user.identifier === identifier).name;
    }

    static isSignedIn() {
        return this.currentUser !== null;
    }

    static signIn() {
        //make call to google oauth and store the results
        let results = {
            email: 'sarah@emailprovider.com'
        };
        let userFromBackend = this.getAll().find((user) => user.identifier === results.email);
        this.currentUser = userFromBackend;
    }

    static isSelf(identifier) {
        return this.currentUser.identifier === identifier;
    }

    static isAdmin() {
        return this.currentUser.permission === Permissions.ADMIN
            || this.currentUser.permission === Permissions.FOCUS;
    }
}
