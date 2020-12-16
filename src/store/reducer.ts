import { ActionCreator, Reducer } from "redux";
import { IUserData, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCES } from "./me/actions";
import { meReducer, MeState } from "./me/reducer";

const UPDATE_COMMENT = 'UPDATE_COMMENT';
const SET_TOKEN = 'SET_TOKEN';

const initialState = {
  commentText: 'Hi! Enter your comment',
  token: '',
  me: {
    loading: false,
    error: '',
    data: {
      
    }
  },
}
export type RootState = {
  commentText: string;
  token: string;
  me: MeState;
}

export type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT,
  text: string,
}

export type SetTokenAction = {
  type: typeof SET_TOKEN,
  token: string,
}

export const updateComment: ActionCreator<UpdateCommentAction> = (text) => ({
  type: 'UPDATE_COMMENT',
  text,
})
export const setToken: ActionCreator<SetTokenAction> = (token) => ({
  type: 'SET_TOKEN',
  token,
})
type MyAction = SetTokenAction 
| UpdateCommentAction 
| MeRequestAction 
| MeRequestErrorAction 
| MeRequestSuccessAction;

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      }
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      }
    case ME_REQUEST:
    case ME_REQUEST_ERROR:
    case ME_REQUEST_SUCCES:
      return {
        ...state,
        me: meReducer(state.me, action)
      }
    default:
      return state;
  }
}