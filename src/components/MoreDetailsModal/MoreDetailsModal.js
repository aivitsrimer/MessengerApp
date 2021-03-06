import React, {useState} from 'react';
import {View, Modal} from 'react-native';
import {MyMoreDetails} from './MoreDetails';
import styles from './MoreDetailsModalStyles';

export const MoreDetailsModal = props => {
  const [backgroundAlpha, setBackgroundAlpha] = useState('none');

  const modalContainerStyles = {...styles.containerBackground, backgroundColor: backgroundAlpha};

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
        <View style={styles.containerModal}>
          <MyMoreDetails setModalVisible={props.setModalVisible} />
        </View>
      </View>
    </Modal>
  );
};
