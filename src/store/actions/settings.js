// @flow
import type { Settings } from "./../../flow/settings"
import {SAVE_SETTINGS} from  './../../flow/actions'

export const saveSettings = (settings: Settings) => ({
  type: SAVE_SETTINGS,
  payload: {
    settings
  }
})
