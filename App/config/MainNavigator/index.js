import { TabNavigator, StackNavigator } from 'react-navigation';

import Login from '../../views/Login/';
import HomeScreen from '../../views/Home/';
import CaretakerRolesMenu from '../../views/CaretakerRolesMenu/';
import Announcements from '../../views/Announcements/';
import UserProfile from '../../views/UserProfile/';
import Navigation from '../../views/Navigation'

export const LoginStack = StackNavigator({
    Login: { screen: Login },
    Home: { screen: Navigation }
}, {
       header: null,
       headerMode: 'none'
})

export const Tabs = TabNavigator({
    Home: { screen: HomeScreen },
    Announcements: { screen: Announcements },
    CaretakerRolesMenu: { screen: CaretakerRolesMenu },
    UserProfile: { screen: UserProfile }
},  {
     mode: 'modal'
})