import Axios from "axios";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducer";

export const ME_REQUEST = 'ME_REQUEST';

export type MeRequestAction = {
  type: typeof ME_REQUEST,
}

export const meRequest: ActionCreator<MeRequestAction>  = () => ({
  type: ME_REQUEST
})


export interface IUserData {
  name?: string,
  iconImg?: string,
}


export const ME_REQUEST_SUCCES = 'ME_REQUEST_SUCCES';

export type MeRequestSuccessAction = {
  type: typeof ME_REQUEST_SUCCES,
  data: IUserData,
}

export const meRequestSuccess: ActionCreator<MeRequestSuccessAction>  = (data: IUserData) => ({
  type: ME_REQUEST_SUCCES,
  data,
})

export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';

export type MeRequestErrorAction = {
  type: typeof ME_REQUEST_ERROR,
  error: string,
}

export const meRequestError: ActionCreator<MeRequestErrorAction>  = (error: string) => ({
  type: ME_REQUEST_ERROR,
  error,
})


export const meRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(meRequest());
  Axios.get('https://oauth.reddit.com/api/v1/me', {
    headers: {
      Authorization: `bearer ${getState().token}`
    },
  }).then((resp) => {
    const userData = resp.data;
    dispatch(meRequestSuccess( { name : userData.name, iconImg: userData.icon_img }));
  })
  .catch((e) => {
    console.log(e);
    dispatch(meRequestError(String(e)));
  });
};



