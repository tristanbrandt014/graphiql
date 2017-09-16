// @flow
export const SAVE_SETTINGS = "SAVE_SETTINGS"
type SaveSettings = {
  type: "SAVE_SETTINGS",
  payload: {
    settings: {
      token?: string
    }
  }
}

export const CLEAR_SETTINGS = "CLEAR_SETTINGS"
type ClearSettings = {
  type: "CLEAR_SETTINGS"
}

export type Action = SaveSettings | ClearSettings
