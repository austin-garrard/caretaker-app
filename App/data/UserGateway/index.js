import { Record } from 'immutable';

export class Permissions {
    static FOCUS = 'focus';
    static ADMIN = 'admin';
    static HELPER = 'helper';
}

export const NotificationTypes = {
    PUSH: 'push',
    EMAIL: 'email',
    SMS: 'sms'
}

export const NotificationTriggers = {
    ANNOUNCEMENT: 'announcement',
    EVENT: 'event',
    EVENT_BY_ROLE: 'event by role'
}

export const createUserSettings = () => {
    return {
        [NotificationTypes.PUSH]: {
            name: 'Push',
            value: null
        },
        [NotificationTypes.EMAIL]: {
            name: 'Email',
            value: null
        },
        [NotificationTypes.SMS]: {
            name: 'SMS',
            value: null
        },
        [NotificationTriggers.ANNOUNCEMENT]: {
            name: 'Announcements',
            value: null
        },
        [NotificationTriggers.EVENT]: {
            name: 'Events',
            value: null
        },
        [NotificationTriggers.EVENT_BY_ROLE]: {
            name: 'Events specific to your role',
            value: null
        }
    }
}

export const createAdminUser = () => ({
    name: 'Sarah',
    identifier: 's',
    permission: Permissions.FOCUS,
    roles: [],
    phone:'123-456-7890',
    notificationTypes: [NotificationTypes.PUSH],
    notificationTriggers: [NotificationTriggers.ANNOUNCEMENT, NotificationTriggers.EVENT_BY_ROLE]
})

export const User = Record(createAdminUser());

const createUserGateway = function() {
    let allUsers = null;
    let currentUser = null;

    return {
        getCurrentUser(){
            return new User(currentUser);
        },

        getAll() {
            if(allUsers === null) {
                //api call goes here
                allUsers = [
                    createAdminUser(),
                    {name: 'Sarah', identifier: 'sarah@emailprovider.com', permission: Permissions.FOCUS, roles: [], phone:'123-456-7890', notificationTypes: [], notificationTriggers: []},
                    {name: 'Caroline', identifier: 'caroline@woahdude.com', permission: Permissions.ADMIN, roles: ['driver', 'coordinator'], phone:'123-456-7890', notificationTypes: [], notificationTriggers: []},
                    {name: 'Jack', identifier: 'jack@coolwebsite.com', permission: Permissions.HELPER, roles: ['active friend'], notificationTypes: [], notificationTriggers: []},
                    {name: 'Austin', identifier: 'austin@yeehaw.com', permission: Permissions.HELPER, roles: [], phone:'123-456-7890', notificationTypes: [], notificationTriggers: []}
                ]
            }
            return allUsers;
        },

        getName(identifier) {
            const user = allUsers.find((user) => user.identifier === identifier)
            return user ? user.name : 'TBD';
        },

        getRoles() {
            return currentUser.roles
        },

        login(email) {
            //make call to google oauth and store the results
            let results = {
                email: email
            };
            let userFromBackend = this.getAll().find((user) => user.identifier === results.email);
            if(typeof userFromBackend !== 'undefined') {
                currentUser = userFromBackend;
                return true;
            }
            return false;
        },

        logout() {
            // make call to oauth and/or invalidate current session
            this.currentUser = null;
        },

        isSelf(identifier) {
            return currentUser.identifier === identifier;
        },

        isAdmin() {
            return currentUser.permission === Permissions.ADMIN
                || currentUser.permission === Permissions.FOCUS;
        },

        getCurrentPermissions() {
            return currentUser.permission;
        },

        inviteUser(email) {
            //api call to invite the user
            alert('invited ' + email + '!');
        }
    }
}

export default createUserGateway();
