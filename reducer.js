const reducer = (state = {list: []}, action) => {
  if (!action.data) {
    console.log('just returned');
    return state;
  }

  let List = JSON.parse(JSON.stringify(state.list));
  List.push(action.data);
  console.log('edited data');
  return {
    ...state,
    list: List,
  };
};

export default reducer;
