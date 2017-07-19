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
//
// export default class CaretakerRolesMenu extends Component {
//     constructor() {
//         super();
//         this.state = {
//             isAdmin: false,
//             activeRoles: []
//         }
//     }
//
//     componentDidMount() {
//         const permissions = UserGateway.getCurrentPermissions();
//         if( permissions == Permissions.FOCUS || permissions == Permissions.ADMIN ) {
//             this.setState({isAdmin: true});
//         } else {
//             this.setState({isAdmin: false});
//         }
//         var roles = UserGateway.getRoles();
//         this.setState({activeRoles: roles})
//     }
//
//     static navigationOptions = {
//         title: 'Caretaker Role Screen'
//     };
//
//     createNewCaretakerRole = () => alert('Insert Caretaker Role Creation Screen Here!');
//
//     render() {
//         return <ScreenWithToolbar title='Roles' navigation={this.props.navigation}>
//             <View style={styles.container}>
//                 <Text style={styles.title}>Caretaker Roles</Text>
//                     {renderif(this.state.isAdmin,
//                         <Button
//                             onPress = {this.createNewCaretakerRole}
//                             title="+"
//                         />
//                     )}
//                 <CaretakerRolesContainer
//                     activeRoles={this.state.activeRoles}
//                 />
//             </View>
//         </ScreenWithToolbar>;
//     }
// }
