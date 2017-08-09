const initialState = {
  list: [],
}

export default (state = initialState, action) => {
  const { type } = action

  switch (type) {
    case 'TASKLIST_ADD':
      return {
        ...state,
        list: [...state.list, {}],
      }

    default:
      return state
  }
}
