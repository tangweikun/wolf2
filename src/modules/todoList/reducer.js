const initialState = {
  tasks: [],
}

export default (state = initialState, action) => {
  const { type, key, value, tasks } = action
  switch (type) {
    case 'TASKS_UPDATE_NEW_TASK':
      return {
        ...state,
        [key]: value,
      }

    case 'TASKS_GET':
      return {
        ...state,
        tasks,
      }

    default:
      return state
  }
}
