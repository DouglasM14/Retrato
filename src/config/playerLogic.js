; (function () {
    const numPlayers = document.getElementById("numPlayers")
    numPlayers.addEventListener("change", setPlayers)

    function setPlayers() {
        gameState.maxPlayer = Number(numPlayers.value)

        createPlayersInputs(gameState.maxPlayer)

        const totPlayers = Array.from(
            { length: gameState.maxPlayer },
            (_, i) => i + 1
        )

        const idxAnswering = Math.floor(Math.random() * totPlayers.length)
        gameState.answeringPlayer = totPlayers.splice(idxAnswering, 1)[0]

        const idxReading = Math.floor(Math.random() * totPlayers.length)
        gameState.readingPlayer = totPlayers[idxReading]

        const playerData = [
            gameState.maxPlayer,
            gameState.answeringPlayer,
            gameState.readingPlayer
        ]

        localStorage.setItem("players", JSON.stringify(playerData))
    }

    setPlayers()

    // Funções de UI

    function createPlayersInputs(max) {
        const divPlayers = document.getElementById("playersInput")
        divPlayers.innerHTML = ""

        for (let i = 0; i < max; i++) {
            const inputPlayersName = document.createElement("input")
            inputPlayersName.id = `player${i}`
            inputPlayersName.type = "text"
            inputPlayersName.placeholder = `Jogador ${i + 1}`

            divPlayers.appendChild(inputPlayersName)
        }
        
        const a = document.getElementById("initQuiz")
    }

})();