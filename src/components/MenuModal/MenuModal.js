import React from 'react';
import {Modal, View} from 'react-native';
import {MenuElement} from '../MenuElement';
import {Divider} from '../Divider';
import styles from './MenuModalStyles';

export const MenuModal = props => {
  const shareButtonHandler = () => {
    props.setModalVisible(false);
  };
  const copyButtonHandler = () => {
    props.setModalVisible(false);
  };
  const backButtonHandler = () => {
    props.setModalVisible(false);
  };

  return (
    <Modal
      animationType={'slide'}
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.setModalVisible(!props.modalVisible);
      }}>
      <View style={styles.containerBackground}>
        <View style={styles.container}>
          <View style={styles.containerButtons}>
            <MenuElement icon="share" onPress={shareButtonHandler}>
              Поделиться
            </MenuElement>
            <Divider />
            <MenuElement icon="document-duplicate" onPress={copyButtonHandler}>
              Скопировать ссылку
            </MenuElement>
          </View>
          <MenuElement style={styles.backButton} onPress={backButtonHandler}>
            Отмена
          </MenuElement>
        </View>
      </View>
    </Modal>
  );
};
