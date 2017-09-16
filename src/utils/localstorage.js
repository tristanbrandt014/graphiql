export default {
    get(key) {
      try {
        return localStorage.getItem(key)
      } catch (err) {
        return false
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, value)
      } catch (err) {
        return false
      }
    },
    clear(key) {
      try {
        localStorage.clear(key)
      } catch (err) {
        return false
      }
    },
  }
  