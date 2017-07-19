import React from 'react';
import { ScrollView } from 'react-native';
import CaretakerRolesList from '../../components/CaretakerRolesList';
import ScreenWithToolbar from '../../components/shared/ScreenWithToolbar';
import ListItem from '../../components/material-ui/ListItem';
import renderif from '../../utils/renderif';

import container from './container';
import styles from './styles';

function CaretakerRolesMenu( {
  isHelper,
  isAdmin,
  createNewCaretakerRole,
  navigation
} ) {
  return <ScreenWithToolbar title='Roles' navigation={navigation}>
    <ScrollView style={styles.container}>
      <CaretakerRolesList isHelper={isHelper} />
      {renderif(isAdmin,
        <ListItem divider centerElement='Add Role' onPress={createNewCaretakerRole} />
      )}
    </ScrollView>
  </ScreenWithToolbar>;
}

export default container(CaretakerRolesMenu);
