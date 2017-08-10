const initialState = {
  list: [],
}

export default (state = initialState, action) => {
  const { type, order, text } = action

  switch (type) {
    case 'TASKLIST_ADD':
      return { ...state, list: [...state.list, { subtitle: text, cards: [] }] }

    case 'TASKLIST_CARD_ADD':
      return {
        ...state,
        list: state.list.map(({ subtitle, cards }, index) => {
          if (index === order) {
            return { subtitle, cards: [...cards, { text }] }
          }

          return { subtitle, cards }
        }),
      }

    default:
      return state
  }
}
