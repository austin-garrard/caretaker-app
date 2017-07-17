import React from 'react';
import { DrawerItems } from 'react-navigation';
import { ThemeProvider, Drawer as MuiDrawer, Avatar } from 'react-native-material-ui';
import theme from '../theme';

import styles from './styles';

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
      <MuiDrawer.Header style={styles.header}>
        <MuiDrawer.Header.Account
          avatar={<Avatar text={screenProps.userName[0].toUpperCase()} />}
          footer={{
              dense: true,
              centerElement: {
                  primaryText: screenProps.userName,
                  secondaryText: screenProps.userEmail,
              }
          }}
        />
      </MuiDrawer.Header>
      <MuiDrawer.Section divider items={drawerItems} />
      <MuiDrawer.Section items={logoutItems} />
    </MuiDrawer>
  </ThemeProvider>;
}
