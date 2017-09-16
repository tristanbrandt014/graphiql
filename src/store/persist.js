// @flow
import { pickBy, includes } from "lodash"
import local from "../utils/localstorage"
import store from "./index"
import { config } from "./../config"

export default () =>
  store.subscribe(() => {
    const fullStore = store.getState()
    const storeToPersist = pickBy(fullStore, (value, key) =>
      includes(config.persistedStoreKeys, key)
    )
    local.set("store", JSON.stringify(storeToPersist))
  })
