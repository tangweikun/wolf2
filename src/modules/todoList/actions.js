export const updateNewTask = (key, value) => ({
  type: 'TASKS_UPDATE_NEW_TASK',
  key,
  value,
})

export const getTasks = tasks => ({
  type: 'TASKS_GET',
  tasks,
})
