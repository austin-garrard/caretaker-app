import React from 'react';
import {View, TextInput, Button, Modal} from 'react-native';

export default CommunityAdminModal = (props) => {

    return (
        <Modal visible={props.visible}
            animationType={"fade"}
            transparent={false}
            onRequestClose={() => {alert("Modal has been closed.")}}>
            <View>
                <TextInput
                    onChangeText={props.onUpdateEmail}
                    placeholder='Enter email'/>
                <Button title="Submit Email" onPress={props.onSubmitEmail} />
                <Button title="Cancel" onPress={props.onHideModal} />
            </View>
        </Modal>
    );
}
