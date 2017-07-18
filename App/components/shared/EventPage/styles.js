import { StyleSheet } from 'react-native';
import theme from '../../../config/theme';

const headerHeight = 120;

export default styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: headerHeight,
    alignItems: 'flex-start',
    shadowOpacity: 0,
    elevation: 0
  },
  scrollbox: {
    paddingTop: 22
  },
  title: {
    fontWeight: 'normal',
    fontSize: theme.typography.fontSize.display,
    color: theme.palette.alternateTextColor
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 12
  },
  details: {
    marginBottom: 24
  },
  detail: {
    height: 'auto',
    minHeight: 56
  },
  detailText: {
    color: theme.palette.primaryTextColor,
    ...theme.typography.subheading
  },
  acceptBtn: {
    alignSelf: 'center'
  },
  editBtnPosition: {
    position: 'absolute',
    top: headerHeight - theme.spacing.miniActionButtonSize / 2,
    left: 7
  },
  editBtn: {
    width: theme.spacing.miniActionButtonSize,
    height: theme.spacing.miniActionButtonSize,
    borderRadius: theme.spacing.miniActionButtonSize / 2,
    backgroundColor: theme.palette.secondaryColor,
    elevation: 4
  }
});
