import { HOMEPAGE_SET } from '../constants/ActionTypes';

const defaultState = {
  content: 'Init Redux Data'
};

export default (state = { ...defaultState }, action) => {
  switch (action.type) {
    case HOMEPAGE_SET:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
