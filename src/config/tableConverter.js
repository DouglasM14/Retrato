const input = document.getElementById("inputFile")
const btn = document.getElementById("btnSend")
const output = document.getElementById("output")

btn.addEventListener("click", insertCsv)

function insertCsv() {
    const csv = input.files[0]
    output.textContent = ''
    if (!csv) {
        output.textContent = "Nenhum arquivo encontrado"
        return
    }

    const reader = new FileReader()

    reader.onload = () => {
        try {
            const table = convertInJson(reader.result)
            saveNewJson(table)
        } catch (error) {
            console.error("Erro ao processar CSV:", error)
            output.textContent = "Erro ao processar o CSV."
        }
    }

    reader.onerror = () => {
        output.textContent = "Erro ao ler o arquivo."
    }

    reader.readAsText(csv)
}

function convertInJson(csv) {
    const lines = csv.trim().split("\n")
    const columns = lines[0].split(";")

    const data = lines.slice(1)

    const result = data.map(lines => {
        const values = lines.split(";")
        const obj = {};

        columns.forEach((columns, index) => {
            obj[columns.trim()] = values[index]?.trim()
        })

        return obj
    })

    return result
}

function saveNewJson(obj) {
    table = JSON.stringify(obj)

    const json = new Blob(
        [table],
        { type: "application/js" }
    );

    const url = URL.createObjectURL(json)
    const a = document.createElement("a")
    a.href = url
    a.download = "perguntas.js"
    a.click()

    URL.revokeObjectURL(url)
}
