import React from 'react';
import CaretakerRolesList from './CaretakerRolesList';
import UserGateway from '../../data/UserGateway';
import CaretakerRolesGateway from '../../data/CaretakerRolesGateway';
import { promiseComponent } from '../../utils/testUtils';

describe('<CaretakerRolesList />', () => {

  let props;
  const roles = [{
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
  }];

  const getAllRolesPromise = new Promise(resolve => resolve(roles));
  const caretakerRolesList = promiseComponent(<CaretakerRolesList {...props} />, getAllRolesPromise);

  jest.spyOn(UserGateway, 'getRoles')
    .mockReturnValue(['driver']);
  jest.spyOn(CaretakerRolesGateway, 'getAll')
    .mockReturnValue(getAllRolesPromise);

  beforeEach(() => {
    props = {
      isHelper: undefined
    };
  });

  it('should render correctly', async () => {
    props.isHelper = false;

    expect(await caretakerRolesList()).toMatchSnapshot();
  });

  describe('userHasRole', () => {
    it('should return true when the user has the given role', async () => {
      expect((await caretakerRolesList()).getInstance().userHasRole('driver')).toBe(true);
    });

    it('should return false when the user does not have the given role', async () => {
      expect((await caretakerRolesList()).getInstance().userHasRole('active friend')).toBe(false);
    });
  });

});
