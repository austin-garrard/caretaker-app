import Path from 'path';
import Pact from 'pact';
import RolesFixture from './CaretakerRoles.fixture';
import gateway from './CaretakerRoles.gateway';
import { API_HOST, API_PORT } from '../../config/ApiConfig';

describe('Caretaker Roles gateway', () => {

  const provider = Pact({
    host: 'localhost',
    port: 8080,
    log: Path.resolve(process.cwd(), 'logs', 'mockserver-integration.log'),
    dir: Path.resolve(process.cwd(), 'pacts'),
    spec: 2,
    consumer: 'Caretaker Roles Gateway',
    provider: 'Caretaker Roles API'
  });

  afterAll(() => provider.finalize());

  beforeAll(() => {
    const interaction = {
      state: 'I have all the roles for a given focus',
      uponReceiving: 'A request for all the roles',
      withRequest: {
        method: 'GET',
        path: '/roles',
        headers: { 'Accept': 'application/json' }
      },
      willRespondWith: {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        body: {
          'roles': RolesFixture.allRoles
        }
      }
    };

    return provider.setup()
      .then(() => provider.addInteraction(interaction))
      .catch(e => console.error(e))
  });

  it('gets all the roles', () => {
    return gateway.getAll()
      .then(roles => expect(roles).toEqual(RolesFixture.allRoles))
  });

  describe('Pact Verification', () => {
    it('succeeded', () => provider.verify())
  })

});