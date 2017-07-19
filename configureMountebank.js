const unirest = require('unirest');
const User = require('./App/data/UserGateway/models');

const MB = 'http://localhost:2525'
const IMPOSTERS = MB + '/imposters'
const HEADERS = {
  "Content-Type": "application/json"
};

const testFixtures = [{
  path: '/users',
  body: {
    users: [
      {name: 'S', identifier: 's', permission: User.Permissions.FOCUS, roles: [], phone:'123-456-7890', settings: User.Settings},
      {name: 'Sarah', identifier: 'sarah@emailprovider.com', permission: User.Permissions.FOCUS, roles: [], phone:'123-456-7890', settings: User.Settings},
      {name: 'Caroline', identifier: 'caroline@woahdude.com', permission: User.Permissions.ADMIN, roles: ['driver', 'coordinator'], phone:'123-456-7890', settings: User.Settings},
      {name: 'Jack', identifier: 'jack@coolwebsite.com', permission: User.Permissions.HELPER, roles: ['active friend'], settings: User.Settings},
      {name: 'Austin', identifier: 'austin@yeehaw.com', permission: User.Permissions.HELPER, roles: [], phone:'123-456-7890', settings: User.Settings}
    ]
  }
}]

unirest
  .delete(IMPOSTERS)
  .end();

unirest
  .post(IMPOSTERS)
  .headers(HEADERS)
  .send({
    port: 8080,
    protocol: "http",
    stubs: [{
      predicates: [{
        equals: {
          path: '/users'
        }
      }],
      responses: [{
        is: {
          statusCode: 200,
          headers: {
            "Content-Type": "application/json"
          },
          body: {
              users: [
                {name: 'S', identifier: 's', permission: User.Permissions.FOCUS, roles: [], phone:'123-456-7890', settings: User.Settings},
                {name: 'Sarah', identifier: 'sarah@emailprovider.com', permission: User.Permissions.FOCUS, roles: [], phone:'123-456-7890', settings: User.Settings},
                {name: 'Caroline', identifier: 'caroline@woahdude.com', permission: User.Permissions.ADMIN, roles: ['driver', 'coordinator'], phone:'123-456-7890', settings: User.Settings},
                {name: 'Jack', identifier: 'jack@coolwebsite.com', permission: User.Permissions.HELPER, roles: ['active friend'], settings: User.Settings},
                {name: 'Austin', identifier: 'austin@yeehaw.com', permission: User.Permissions.HELPER, roles: [], phone:'123-456-7890', settings: User.Settings}
              ]
          }
        }
      }]
    }, {
      predicates: [{
        equals: {
          path: '/roles'
        }
      }],
      responses: [{
        is: {
          statusCode: 200,
          headers: {
            "Content-Type": "application/json"
          },
          body: {
            roles: [
              {id: 1, name: 'Driver', description: 'Gives rides to things'},
              {id: 2, name: 'Coordinator', description: 'Helps coordinate people sign ups'},
              {id: 3, name: 'Groceries', description: 'Picks up groceries'},
              {id: 4, name: 'Active Friend', description: 'Gets focus out and active (eg, walks) during vulnerable times'},
              {id: 5, name: 'Chef', description: 'Cooks food cause yum'},
              {id: 6, name: 'Super Chef', description: 'Cooks SUPER food cause YUM'},
              {id: 7, name: 'Super Duper Chef!', description: 'Cooks SUPER DUPER food cause YUM YUM'}
            ]
          }
        }
      }]
    }]
  })
  .end((response) => console.log(response.body));
