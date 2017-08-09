const initialState = {
  tasks: [],
}

export default (state = initialState, action) => {
  const { type } = action

  switch (type) {
    case 'TASKLIST_ADD':
      return {
        ...state,
        tasks: [...state.tasks, {}],
      }

    default:
      return state
  }
}
