import React from 'react';
import { DrawerItems } from 'react-navigation';
import { ThemeProvider, Drawer as MuiDrawer } from 'react-native-material-ui';
import theme from '../theme';

export default function Drawer( { navigation, items, screenProps } ) {
  const drawerItems = items.map((item) => {
    return {
      icon: screenProps.routes[item.key].navigationOptions.drawerIcon,
      value: screenProps.routes[item.key].navigationOptions.drawerLabel,
      onPress: () => navigation.navigate(item.routeName)
    };
  });

  drawerItems[navigation.state.index].active = true;

  const logoutItems = [{
      icon: 'keyboard-arrow-left',
      value: 'Logout',
      onPress: screenProps.logout
  }];

  return <ThemeProvider uiTheme={theme}>
    <MuiDrawer>
      <MuiDrawer.Section divider title='Caretaker' />
      <MuiDrawer.Section divider items={drawerItems} />
      <MuiDrawer.Section items={logoutItems} />
    </MuiDrawer>
  </ThemeProvider>;
}
