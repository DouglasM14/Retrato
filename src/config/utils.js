import { gameState } from "./state.js"
import { persistQuizState } from "./questions.js"

export function normalize(text) {
  return text.trim().toLowerCase()
}

export function checkAnswer(kick, answer) {
  return normalize(kick) === normalize(answer)
}

export function losePoint() {
  gameState.pontos--
  persistQuizState()
}

export function resetPoints() {
  gameState.pontos = 10
}
