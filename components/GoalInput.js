import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    };

    const goalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    const cancelHandler = () => {
        props.onCancel();
    }

    return (
        <Modal visible={props.visible} animationType={"fade"}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={"Course Goal"}
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title={"CANCEL"} color={"red"} onPress={cancelHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title={"ADD"} onPress={goalHandler}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '40%'
    }
})

export default GoalInput;
