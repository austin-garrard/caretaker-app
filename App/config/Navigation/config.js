import React from 'react';
import HomeScreen from '../../views/Home/';
import CaretakerRolesMenu from '../../views/CaretakerRolesMenu/';
import Announcements from '../../views/Announcements/';
import UserProfile from '../../views/UserProfile/';
import CommunityAdmin from '../../views/CommunityAdmin/';
import Drawer from '../Drawer';

export const config = {
    initialRouteName: 'Home',
    contentComponent: props => <Drawer {...props} />
}

export const helperRoutes = {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        drawerLabel: 'Schedule',
        drawerIcon: 'today'
      }
    },
    Announcements: {
      screen: Announcements,
      navigationOptions: {
        drawerLabel: 'Announcements',
        drawerIcon: 'announcement'
      }
    },
    CaretakerRolesMenu: {
      screen: CaretakerRolesMenu,
      navigationOptions: {
        drawerLabel: 'Roles',
        drawerIcon: 'directions-car'
      }
    },
    UserProfile: {
      screen: UserProfile,
      navigationOptions: {
        drawerLabel: 'Profile',
        drawerIcon: 'person'
      }
    }
}

export const adminRoutes = {
    ...helperRoutes,
    CommunityAdmin: {
      screen: CommunityAdmin,
      navigationOptions: {
        drawerLabel: 'Admin',
        drawerIcon: 'build'
      }
    }
}
