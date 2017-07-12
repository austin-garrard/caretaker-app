import HomeScreen from '../../views/Home/';
import CaretakerRolesMenu from '../../views/CaretakerRolesMenu/';
import Announcements from '../../views/Announcements/';
import UserProfile from '../../views/UserProfile/';
import CommunityAdmin from '../../views/CommunityAdmin/';

export const config = {
    initialRouteName: 'Home'
}

export const helperRoutes = {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        drawerLabel: 'Schedule'
      }
    },
    Announcements: {
      screen: Announcements,
      navigationOptions: {
        drawerLabel: 'Announcements'
      }
    },
    CaretakerRolesMenu: {
      screen: CaretakerRolesMenu,
      navigationOptions: {
        drawerLabel: 'Roles'
      }
    },
    UserProfile: {
      screen: UserProfile,
      navigationOptions: {
        drawerLabel: 'Profile'
      }
    }
}

export const adminRoutes = {
    ...helperRoutes,
    CommunityAdmin: {
      screen: CommunityAdmin,
      navigationOptions: {
        drawerLabel: 'Admin'
      }
    }
}
