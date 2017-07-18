const unirest = require('unirest');
const User = require('./App/data/UserGateway/models');

const MB = 'http://localhost:2525'
const IMPOSTERS = MB + '/imposters'
const HEADERS = {
  "Content-Type": "application/json"
};

const is = (response) => ({
  port: 8080,
  protocol: "http",
  stubs: [
    {
      predicates: [{
        equals: {
          path: "/users"
        }
      }],
      responses: [
        {
        is: response
        }]
    }]
})

unirest
  .delete(IMPOSTERS)
  .end();

// get all users
unirest
  .post(IMPOSTERS)
  .headers(HEADERS)
  .send(is({
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
  }))
  .end((response) => console.log(response.body));
