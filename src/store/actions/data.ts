import { ReduxAction } from '../../types/reducers';

export enum DATAACTIONS {
  SET_CONTENTS = 'dataActions/setContents',
}

export const setDataContents: ReduxAction<string[]> = (contents) => ({
  type: DATAACTIONS.SET_CONTENTS,
  payload: contents,
});
