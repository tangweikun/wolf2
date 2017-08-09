const initialState = {
  list: [],
}

export default (state = initialState, action) => {
  const { type, order } = action

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
            return { subTitle, cards: [...cards, { text: '999' }] }
          }

          return { subTitle, cards }
        }),
      }

    default:
      return state
  }
}
