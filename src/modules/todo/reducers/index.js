export default (state = {}, action) => {
  const { type, key, value } = action
  switch (type) {
    case 'CHANGE_VALUE':
      return {
        [key]: value,
      }
    default:
      return state
  }
}
