const unirest = require('unirest');
const User = require('./../App/data/UserGateway/models');

const MB = 'http://localhost:2525';
const IMPOSTERS = MB + '/imposters';
const HEADERS = {
  "Content-Type": "application/json"
};

const testFixtures = [{
  path: '/users',
  body: {
    users: [{
      name: 'S',
      identifier: 's',
      permission: User.Permissions.FOCUS,
      roles: [],
      phone: '123-456-7890',
      settings: User.Settings
    }, {
      name: 'Sarah',
      identifier: 'sarah@emailprovider.com',
      permission: User.Permissions.FOCUS,
      roles: [],
      phone: '123-456-7890',
      settings: User.Settings
    }, {
      name: 'Caroline',
      identifier: 'caroline@woahdude.com',
      permission: User.Permissions.ADMIN,
      roles: ['driver', 'coordinator'],
      phone: '123-456-7890',
      settings: User.Settings
    }, {
      name: 'Jack',
      identifier: 'jack@coolwebsite.com',
      permission: User.Permissions.HELPER,
      roles: ['active friend'],
      settings: User.Settings
    }, {
      name: 'Austin',
      identifier: 'austin@yeehaw.com',
      permission: User.Permissions.HELPER,
      roles: [],
      phone: '123-456-7890',
      settings: User.Settings
    }]
  }
}, {
  path: '/roles',
  body: {
    roles: [{
      id: 1,
      name: 'Driver',
      description: 'Gives rides to things'
    }, {
      id: 2,
      name: 'Coordinator',
      description: 'Helps coordinate people sign ups'
    }, {
      id: 3,
      name: 'Groceries',
      description: 'Picks up groceries'
    }, {
      id: 4,
      name: 'Active Friend',
      description: 'Gets focus out and active (eg, walks) during vulnerable times'
    }, {
      id: 5,
      name: 'Chef',
      description: 'Cooks food cause yum'
    }]
  }
}];

const stubs = testFixtures.map(fixture => ({
  predicates: [{
    equals: {
      path: fixture.path
    }
  }],
  responses: [{
    is: {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: fixture.body
    }
  }]
}));

unirest
  .delete(IMPOSTERS)
  .end();

unirest
  .post(IMPOSTERS)
  .headers(HEADERS)
  .send({
    port: 8080,
    protocol: "http",
    stubs: stubs
  })
  .end((response) => {
    if(response.status !== 201) {
      console.error('Mountebank could not be started. Received response:');
      console.error(response.body || response);
      process.exit(1);
    }
  });
