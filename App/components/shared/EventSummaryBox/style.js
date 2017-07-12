import { StyleSheet } from 'react-native';
import theme from '../../../config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.secondaryColor,
    borderRadius: 2,
    padding: 4
  },
  text: {
    color: theme.palette.secondaryColor
  },
  name: {
    fontWeight: 'bold'
  },
  volunteer: {}
});

export default styles;
