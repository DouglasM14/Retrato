import { gameState } from "./state.js"
import { save, load, saveQuizState, loadQuizState } from "./storage.js"

export async function loadQuestions() {
  if (gameState.perguntas.length) return

  const resp = await fetch("../_Perguntas/perguntas.json")
  gameState.perguntas = await resp.json()
}

export function generateQuestionOrder() {
  let order = load("sorted")

  if (!order) {
    order = Array.from(
      { length: gameState.perguntas.length },
      (_, i) => i
    ).sort(() => Math.random() - 0.5)

    save("sorted", order)
  }

  gameState.ordemPerguntas = order
  gameState.indiceAtual = order[0]
}

export function getCurrentQuestion() {
  return gameState.perguntas[gameState.indiceAtual]
}

export function advanceQuestion() {
  gameState.ordemPerguntas.shift()
  save("sorted", gameState.ordemPerguntas)
}

export function generateTipOrder() {
  const saved = loadQuizState()

  if (saved?.tipOrder) {
    gameState.tipOrder = saved.tipOrder
    gameState.revealedTips = saved.revealedTips || []
    gameState.pontos = saved.pontos
    return
  }

  gameState.tipOrder = Array.from({ length: 10 }, (_, i) => i + 1)
    .sort(() => Math.random() - 0.5)

  gameState.revealedTips = []
  persistQuizState()
}

export function persistQuizState() {
  saveQuizState({
    tipOrder: gameState.tipOrder,
    revealedTips: gameState.revealedTips,
    pontos: gameState.pontos
  })
}
