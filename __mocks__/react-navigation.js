const rn = jest.genMockFromModule('react-navigation');
rn.StackNavigator = jest.fn();
rn.DrawerNavigator = jest.fn();
rn.TabNavigator = jest.fn();
module.exports = rn
