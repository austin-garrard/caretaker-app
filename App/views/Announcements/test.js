import React, {Component} from 'react';
import renderer from 'react-test-renderer';
import AnnouncementsGateway from '../../data/AnnouncementsGateway/';
import Announcements from './index.js';

describe('Announcements Screen', () => {
    it('should get all announcements from the gateway', () => {
        const spy = jest.spyOn(AnnouncementsGateway, 'getAll');

        renderer.create(<Announcements />);

        expect(spy).toHaveBeenCalled();
    })
})
