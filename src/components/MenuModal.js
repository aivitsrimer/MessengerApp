import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {MenuElement} from './MenuElement';
import {Divider} from './Divider';
import typo from './ui-kit/text/typo';

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

const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  container: {
    height: 161,
  },
  containerButtons: {
    backgroundColor: '#2B2146',
  },
  backButton: {
    container: {
      marginTop: 10,
      borderRadius: 15,
      paddingVertical: 17,
      justifyContent: 'center',
    },
    text: {
      ...typo.GroteskBold16,
    },
  },
});
