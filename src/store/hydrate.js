// @flow
import local from './../utils/localstorage'

let store = {}
const savedStore = local.get("store")
if (savedStore) {
    store = {
        ...JSON.parse(savedStore)
    }
}

export default store