export const addTask = () => ({
  type: 'TASKLIST_ADD',
})

export const addCard = ({ order, text }) => ({
  type: 'TASKLIST_CARD_ADD',
  order,
  text,
})

export const updateCard = () => ({
  type: 'TASKLIST_CARD_UPDATE',
})
