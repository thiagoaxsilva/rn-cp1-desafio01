import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Header } from "../components/Header";
import { Task, TasksList } from "../components/TasksList";
import { TodoInput } from "../components/TodoInput";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      done: false,
    };

    setTasks((allTasks) => [...allTasks, newTask]);
  }

  function handleToggleTaskDone(id: number) {
    const tasksCopy = tasks;
    const completedTask = tasksCopy.find((task) => task.id === id);
    if (completedTask) {
      completedTask.done = true;
      tasksCopy.splice(tasksCopy.indexOf(completedTask), 1, completedTask);
      setTasks([...tasksCopy]);
    }
    //TODO - toggle task done if exists
  }

  function handleRemoveTask(id: number) {
    const tasksCopy = tasks;
    const completedTask = tasksCopy.find((task) => task.id === id);
    console.log(id);
    if (completedTask) {
      tasksCopy.splice(tasksCopy.indexOf(completedTask), 1);
      console.log(tasksCopy);
      setTasks([...tasksCopy]);
    }
    //TODO - remove task from state
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
});
