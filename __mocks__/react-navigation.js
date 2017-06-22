const rn = jest.genMockFromModule('react-navigation');
rn.StackNavigator = jest.fn();
module.exports = rn
