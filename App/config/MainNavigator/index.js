import { StackNavigator } from 'react-navigation';
import Login from '../../views/Login/';
import Navigation from '../Navigation/';

export const LoginStack = StackNavigator({
    Login: { screen: Login },
    Home: { screen: Navigation }
}, {
       header: null,
       headerMode: 'none'
})
