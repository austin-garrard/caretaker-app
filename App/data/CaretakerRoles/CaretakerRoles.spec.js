
import { mockApiConfig, createPact } from '../../utils/testUtils';
import RolesFixture from './CaretakerRoles.fixture';
import gateway from './CaretakerRoles.gateway';

jest.mock('../../config/ApiConfig', () => mockApiConfig);

describe('Caretaker Roles gateway', () => {

  const provider = createPact('Caretaker Roles Gateway', 'Caretaker Roles API');

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

  beforeAll(() => {
    return provider.setup()
      .then(() => provider.addInteraction(interaction))
      .catch(e => console.error(e))
  });

  afterAll(() => provider.finalize());

  it('gets all the roles', () => {
    return gateway.getAll()
      .then(roles => expect(roles).toEqual(RolesFixture.allRoles))
  });

  describe('Pact Verification', () => {
    it('succeeded', () => provider.verify())
  })

});