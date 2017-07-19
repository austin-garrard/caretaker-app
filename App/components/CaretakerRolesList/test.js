import React, {Component} from 'react';
import renderer from 'react-test-renderer';
import RolesMenu from './index.js'
import RolesGateway from '../../data/CaretakerRolesGateway';
import UserGateway from '../../data/UserGateway';

describe('Caretaker Roles Menu', () => {


  beforeEach(() => {
    UserGateway.login('caroline@woahdude.com');
  })

  const roles = [
    {id: 1, name: 'Driver', description: 'Gives rides to things'},
    {id: 2, name: 'Coordinator', description: 'Helps coordinate people sign ups'},
    {id: 3, name: 'Groceries', description: 'Picks up groceries'},
    {id: 4, name: 'Active Friend', description: 'Gets focus out and active (eg, walks) during vulnerable times'},
    {id: 5, name: 'Chef', description: 'Cooks food cause yum'}
  ]

  const getAllPromise = new Promise((resolve, reject) => {
      resolve(roles)
  })

  it('should get all the roles', async () => {
    jest.spyOn(RolesGateway, 'getAll')
      .mockImplementation(() => {
        return getAllPromise;
      })

    const menu = renderer.create(<RolesMenu />).getInstance();

    await getAllPromise
    expect(menu.state.caretakerRoles).toBe(roles);
  })
})
