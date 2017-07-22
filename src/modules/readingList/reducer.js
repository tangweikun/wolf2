export default (state = {}, action) => {
  const { type, key, value } = action;
  switch (type) {
    case 'READLINGLIST_CHANGE_VALUE':
      return { [key]: value };

    default:
      return state;
  }
};
