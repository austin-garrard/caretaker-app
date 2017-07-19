import React from 'react';
import renderer from 'react-test-renderer';
import CaretakerRolesMenu from './CaretakerRolesMenu';
import UserGateway, { Permissions } from '../../data/UserGateway';
import CaretakerRolesGateway from '../../data/CaretakerRolesGateway';
import { promiseComponent, promiseValue } from '../../utils/testUtils';

describe('<CaretakerRolesMenu />', () => {
  let getCurrentPermissions;
  let caretakerRolesMenu;
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

  beforeEach(() => {
    getCurrentPermissions = jest.spyOn(UserGateway, 'getCurrentPermissions');
    const getAllRolesPromise = promiseValue(roles);
    jest.spyOn(CaretakerRolesGateway, 'getAll').mockReturnValue(getAllRolesPromise);
    caretakerRolesMenu = promiseComponent(<CaretakerRolesMenu />, getAllRolesPromise);
    jest.spyOn(UserGateway, 'getRoles').mockReturnValue(['driver']);
  });

  it('should render correctly', async () => {
    getCurrentPermissions.mockReturnValue(Permissions.ADMIN);
    expect(await caretakerRolesMenu()).toMatchSnapshot();
  });

  describe('isHelper', () => {
    it('should return false when user is Focus', async () => {
      getCurrentPermissions.mockReturnValue(Permissions.FOCUS);
      expect((await caretakerRolesMenu()).getInstance().isHelper()).toBe(false);
    });

    it('should return true when user is Admin', async () => {
      getCurrentPermissions.mockReturnValue(Permissions.ADMIN);
      expect((await caretakerRolesMenu()).getInstance().isHelper()).toBe(true);
    });

    it('should return true when user is Helper', async () => {
      getCurrentPermissions.mockReturnValue(Permissions.HELPER);
      expect((await caretakerRolesMenu()).getInstance().isHelper()).toBe(true);
    });
  });

  describe('isAdmin', () => {
    it('should return true when user is Focus', async () => {
      getCurrentPermissions.mockReturnValue(Permissions.FOCUS);
      expect((await caretakerRolesMenu()).getInstance().isAdmin()).toBe(true);
    });

    it('should return true when user is Admin', async () => {
      getCurrentPermissions.mockReturnValue(Permissions.ADMIN);
      expect((await caretakerRolesMenu()).getInstance().isAdmin()).toBe(true);
    });

    it('should return false when user is Helper', async () => {
      getCurrentPermissions.mockReturnValue(Permissions.HELPER);
      expect((await caretakerRolesMenu()).getInstance().isAdmin()).toBe(false);
    });
  });

  afterEach(() => {
    getCurrentPermissions.mockReset();
  });

});
