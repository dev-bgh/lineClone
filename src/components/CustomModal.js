import React from 'react';
import { View, Modal,Text, StyleSheet,TouchableOpacity  } from 'react-native';


function CustomModal({ children, visible, onRequestClose, onShow }) {
    return (
        <Modal 
            style={styles.MODAL}
            transparent={true}
            visible={visible} 
            animationType="slide" 
            onRequestClose={onRequestClose ? onRequestClose : ()=>{}}
            onShow={onShow ? onShow : ()=>{}}>
            <View style={styles.modal}>
                {children}
            </View>
        </Modal>
    )
}


function ModalAsk({ onConfirm, onCancel, title, contents }) {
    return (
        <View style={styles.confirmModal}>
            <View style={styles.modalBody}>
                <Text style={styles.h1}>{title}</Text>
                {contents && <Text style={styles.h2}>{contents}</Text>}
            </View>
            <View style={styles.btnsWrapper}>
                <TouchableOpacity style={styles.btnWrapper} onPress={()=>{onConfirm()}}>
                    <Text style={styles.btnText}>확인</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnWrapper]} onPress={()=>{onCancel()}}>
                    <Text style={[styles.btnText]}>취소</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    MODAL: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0
    },
    modal: {
        position: "relative",
        flex: 1,
        backgroundColor: "#111111a0",
        justifyContent: "center",
        alignItems: "center"
    },
    confirmModal: {
        height: 140,
        width: "80%",
        maxWidth: 300,
        backgroundColor: "white",
    },
    modalBody: {
        paddingTop: 10,
        paddingBottom: 20,
        marginLeft: 30
    },
    h1: {
        marginTop: 15,
        fontSize: 16,
        color: "#484848"
        
    },
    h2: {
        marginTop: 5,
        fontSize: 12,
        textAlign: "center",
        color: "#484848"
    },
    btnText: {
        fontSize: 16,
        textAlign: "center",
    },
    btnsWrapper: {
        height: 50,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    btnWrapper: {
        height: "100%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    btnText: {
        color: "#000000",
        fontSize: 14,
        textAlign: "center",
    },
})

export default CustomModal;
export {
    ModalAsk
};