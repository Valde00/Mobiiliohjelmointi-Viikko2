import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text>Press to open modal</Text>
      </Pressable>

      <Modal
        visible={modalVisible}
        transparent
      >
        <View style={styles.modal}>
          <View style={styles.content}>
            <Text style={styles.modalText}>This is a modal.</Text>
            <Pressable style={styles.cancelButton} onPress={() => setModalVisible(false)}>
              <Text>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    backgroundColor: 'white',
    padding: 20,
    width: 300,
    height: 300,
    justifyContent: 'space-between',
  },
  modalText: {
    fontSize: 24,
    textAlign: 'center',
  },
  cancelButton: {
    fontSize:16,
    alignSelf: 'flex-end',
  },
});
