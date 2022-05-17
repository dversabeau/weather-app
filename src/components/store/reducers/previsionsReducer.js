import * as Action from '../actions/actionTypes';



const initialState = {
  data: []
};

export function previsionReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case Action.NEW_PREVISION_ACTION:
      return { data: action.payload };
  }
}