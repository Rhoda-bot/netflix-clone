/* eslint-disable @typescript-eslint/default-param-last */
import { ReducerData, ReduxActionData } from '../../types/reducers';
import { DATAACTIONS } from '../actions/data';

const initialState: ReducerData = {
  contents: [],
};

const dataState: (state: ReducerData, action: ReduxActionData<any>) =>
ReducerData = (state = initialState, action: ReduxActionData<any>) => {
  switch (action.type) {
    case DATAACTIONS.SET_CONTENTS:
      return {
        ...state,
        contents: action.payload,
      };
    default:
      return state;
  }
};

export default dataState;
