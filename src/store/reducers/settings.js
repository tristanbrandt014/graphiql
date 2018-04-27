// @flow
import type {Settings} from './../../flow/settings'
import type {Action} from './../../flow/actions'
import {SAVE_SETTINGS, CLEAR_SETTINGS} from './../../flow/actions'

const initialState = {
  token: "",
  refreshToken: ""
}

export default (state: Settings = initialState, action: Action) => {
  switch (action.type) {
    case SAVE_SETTINGS:
      return {
        ...state,
        ...action.payload.settings
      }
    case CLEAR_SETTINGS:
      return initialState
    default:
      return state
  }
}
