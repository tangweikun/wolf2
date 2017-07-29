export const changeValue = (key, value) => ({
  type: 'CHANGE_VALUE',
  key,
  value,
})

export const getTasks = tasks => ({
  type: 'TASKS_GET',
  tasks,
})
