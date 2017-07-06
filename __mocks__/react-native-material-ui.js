const materialUi = jest.genMockFromModule('react-native-material-ui');
materialUi.ActionButton = jest.fn();
module.exports = materialUi;
