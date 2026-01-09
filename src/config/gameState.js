const gameFunctions = function () {
    window.gameState = {
        playersOrder: [],
        actualPlayer: 0,
        readerPlayer: 0,

        questionsOrder: [],
        tipsOrder: [],
        revealedTips: []
    }

    return gameState
}();