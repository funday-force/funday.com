const initialState = {
  user: {}
};

const UPDATE_USER = "UPDATE_USER";

export default function reducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case UPDATE_USER:
      return Object.assign({}, state, { user: payload });

    default:
      return state;
  }
}

export function updateUser(userObj) {
  return {
    type: UPDATE_USER,
    payload: userObj
  };
}
