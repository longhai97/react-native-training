import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from "react";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    console.log(courseGoals)

    const addGoalHandler = (goalTitle) => {
        setCourseGoals(currentGoals => [...currentGoals,
            {id: Math.random().toString(), value: goalTitle}
        ]);
        setIsAddMode(false)
    };

    const removeHandler = (goalId) => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== goalId);
        });
    };

    const cancelHandler = () => {
        setIsAddMode(false);
    }

    return (
        <View style={styles.screen}>
            <Button title={"Add New Goal"} onPress={() => setIsAddMode(true)}/>
            <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelHandler}/>
            <FlatList
                keyExtractor={((item, index) => item.id)}
                data={courseGoals}
                renderItem={itemData => (
                    <GoalItem
                        id={itemData.item.id}
                        onDelete={removeHandler}
                        title={itemData.item.value}/>
                )}>
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    }
});
