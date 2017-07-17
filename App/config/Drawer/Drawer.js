import React from 'react';
import { DrawerItems } from 'react-navigation';
import { ThemeProvider, Drawer as MuiDrawer } from 'react-native-material-ui';
import theme from '../theme';

export default function Drawer( { navigation, items, screenProps } ) {
  const drawerItems = items.map((item) => {
    return {
      icon: screenProps[item.key].navigationOptions.drawerIcon,
      value: screenProps[item.key].navigationOptions.drawerLabel,
      onPress: () => navigation.navigate(item.routeName)
    };
  });

  drawerItems[navigation.state.index].active = true;

  return <ThemeProvider uiTheme={theme}>
    <MuiDrawer>
      <MuiDrawer.Section divider title='Caretaker' />
      <MuiDrawer.Section items={drawerItems} />
    </MuiDrawer>
  </ThemeProvider>;
}
