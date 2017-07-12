export class Permissions {
    static FOCUS = 'focus';
    static ADMIN = 'admin';
    static HELPER = 'helper';
}

const createUserGateway = function() {
    let allUsers = null;

    return {
        currentUser: null,

        getAll() {
            if(allUsers === null) {
                //api call goes here
                allUsers = [
                    {name: 'Sarah', identifier: 'sarah@emailprovider.com', permission: Permissions.FOCUS, roles: [], phone:'123-456-7890'},
                    {name: 'Sarah', identifier: 's', permission: Permissions.FOCUS, roles: [], phone:'123-456-7890'},
                    {name: 'Caroline', identifier: 'caroline@woahdude.com', permission: Permissions.ADMIN, roles: ['driver', 'coordinator'], phone:'123-456-7890'},
                    {name: 'Jack', identifier: 'jack@coolwebsite.com', permission: Permissions.HELPER, roles: ['active friend']},
                    {name: 'Austin', identifier: 'austin@yeehaw.com', permission: Permissions.HELPER, roles: [], phone:'123-456-7890'}
                ]
            }
            return allUsers;
        },

        getName(identifier) {
            const user = allUsers.find((user) => user.identifier === identifier)
            return user ? user.name : 'TBD';
        },

        getRoles() {
            return this.currentUser.roles
        },

        signIn(email) {
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
        },

        isSelf(identifier) {
            return this.currentUser.identifier === identifier;
        },

        isAdmin() {
            return this.currentUser.permission === Permissions.ADMIN
                || this.currentUser.permission === Permissions.FOCUS;
        },

        getCurrentPermissions() {
            return this.currentUser.permission;
        },

        inviteUser(email) {
            //api call to invite the user
            alert('invited ' + email + '!');
        }
    }
}

export default createUserGateway();
