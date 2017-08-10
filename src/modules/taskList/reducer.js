const initialState = {
  list: [],
}

export default (state = initialState, action) => {
  const { type, order, text } = action

  switch (type) {
    case 'TASKLIST_ADD':
      return {
        ...state,
        list: [...state.list, { subTitle: 'iamsubtitle', cards: [] }],
      }

    case 'TASKLIST_CARD_ADD':
      return {
        ...state,
        list: state.list.map(({ subTitle, cards }, index) => {
          if (index === order) {
            return { subTitle, cards: [...cards, { text }] }
          }

          return { subTitle, cards }
        }),
      }

    default:
      return state
  }
}
