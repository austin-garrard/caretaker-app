import HomeScreen from '../../views/Home/';
import CaretakerRolesMenu from '../../views/CaretakerRolesMenu/';
import Announcements from '../../views/Announcements/';
import UserProfile from '../../views/UserProfile/';
import CommunityAdmin from '../../views/CommunityAdmin/';

export const config = {
    mode: 'modal'
}

export const helperRoutes = {
    Home: { screen: HomeScreen },
    Announcements: { screen: Announcements },
    CaretakerRolesMenu: { screen: CaretakerRolesMenu },
    UserProfile: { screen: UserProfile }
}

export const adminRoutes = {
    ...helperRoutes,
    CommunityAdmin: { screen: CommunityAdmin }
}
