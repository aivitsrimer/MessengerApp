import React, {useState} from 'react';
import {View, Modal, StyleSheet} from 'react-native';
import {MoreDetails} from './MoreDetails';

export const MoreDetailsModal = props => {
  const [backgroundAlpha, setBackgroundAlpha] = useState('none');

  const modalContainerStyles = {...styles.modalContainer, backgroundColor: backgroundAlpha};

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onShow={() => {
        setBackgroundAlpha('rgba(0,0,0,0.6)');
      }}
      onRequestClose={() => {
        props.setModalVisible(!props.modalVisible);
        setBackgroundAlpha('none');
      }}>
      <View style={modalContainerStyles}>
        <View style={styles.modal}>
          <MoreDetails setModalVisible={props.setModalVisible} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 15,
  },
  modal: {
    flex: 0.75,
    elevation: 20,
    backgroundColor: '#2B2146',
    overflow: 'hidden',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
