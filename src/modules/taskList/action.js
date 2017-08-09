export const addTask = () => ({
  type: 'TASKLIST_ADD',
})

export const addCard = order => ({
  type: 'TASKLIST_CARD_ADD',
  order,
})
