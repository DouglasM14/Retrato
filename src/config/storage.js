export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function load(key) {
  return JSON.parse(localStorage.getItem(key))
}

export function clear(key) {
  localStorage.removeItem(key)
}
