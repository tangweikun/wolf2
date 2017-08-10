export const addTask = text => ({
  type: 'TASKLIST_ADD',
  text,
})

export const addCard = ({ order, text }) => ({
  type: 'TASKLIST_CARD_ADD',
  order,
  text,
})

export const updateCard = () => ({
  type: 'TASKLIST_CARD_UPDATE',
})
