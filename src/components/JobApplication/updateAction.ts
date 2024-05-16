function updateAction(state, payload) {
  return {
    ...state,
    ...payload,
  };
}

export default updateAction;
