import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Modal from "react-native-modal";

export default ModalComponent = () => {
    return (
        <Modal isVisible={isModalVisible}>
            <View style={{ 
                flex: 1,
                marginTop:10,
                backgroundColor:'white',
                borderRadius:10,
                justifyContent:'flex-end',
                padding:10
            }}>
            
            <Button title="Cancel modal" onPress={toggleModal} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({

})
