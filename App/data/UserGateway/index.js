export class Permissions {
    static FOCUS = 'focus';
    static ADMIN = 'admin';
    static HELPER = 'helper';
}

export default class UserGateway {

    static currentUser = null;
    static allUsers = null;

    static getAll() {
        if(this.allUsers === null) {
            //api call goes here
            this.allUsers = [
                {name: 'Sarah', identifier: 's', permission: Permissions.FOCUS, roles: [], phone:'123-456-7890'},
                {name: 'Caroline', identifier: 'caroline@woahdude.com', permission: Permissions.ADMIN, roles: ['driver', 'coordinator'], phone:'123-456-7890'},
                {name: 'Jack', identifier: 'jack@coolwebsite.com', permission: Permissions.HELPER, roles: ['active friend']},
                {name: 'Austin', identifier: 'austin@yeehaw.com', permission: Permissions.HELPER, roles: [], phone:'123-456-7890'}
            ]
        }
        return this.allUsers;
    }

    static getName(identifier) {
        const user = this.allUsers.find((user) => user.identifier === identifier)
        return user ? user.name : 'TBD';
    }

    static getRoles() {
        return this.currentUser.roles
    }

    static signIn(email) {
        //make call to google oauth and store the results
        let results = {
            email: email
        };
        let userFromBackend = this.getAll().find((user) => user.identifier === results.email);
        if(typeof userFromBackend !== 'undefined') {
            this.currentUser = userFromBackend;
            return true;
        }
        return false;
    }

    static isSelf(identifier) {
        return this.currentUser.identifier === identifier;
    }

    static isAdmin() {
        return this.currentUser.permission === Permissions.ADMIN
            || this.currentUser.permission === Permissions.FOCUS;
    }

    static getCurrentPermissions() {
        return this.currentUser.permission;
    }

    static inviteUser(email) {
        //api call to invite the user
        alert('invited ' + email + '!');
    }
}
