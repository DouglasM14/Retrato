const stateKey = "quizState"

export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function load(key) {
  return JSON.parse(localStorage.getItem(key))
}

export function clear(key) {
  localStorage.removeItem(key)
}

export function saveQuizState(state) {
  save(stateKey, state)
}

export function loadQuizState() {
  return load(stateKey)
}

export function clearQuizState() {
  clear(stateKey)
}
