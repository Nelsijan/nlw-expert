const perguntas = [
    {
        pergunta: "Qual destes é um dos Dez Mandamentos dados por Deus a Moisés no Monte Sinai?",
        respostas: [
            "Amar ao próximo como a si mesmo",
            "Não roubar",
            "Não usar roupas mistas",
            "Não falar mentiras",
        ],
        correta: 0
    },

    {
        pergunta: "Qual era o nome do homem que construiu uma arca, de acordo com a narrativa bíblica do Dilúvio?",
        respostas: [
            "Noé",
            "Moisés",
            "Abraão",
            "José",
        ],
        correta: 0
    },
    {
        pergunta: "Qual desses livros da Bíblia é conhecido por relatar a história de José, filho de Jacó?",
        respostas: [
            "Exôdo",
            "Gênesis",
            "Deuteronômio",
            "Levítico",
        ],
        correta: 1
    },

    {
        pergunta: "Quem foi o rei que construiu o templo em Jerusalém, conforme descrito na Bíblia?",
        respostas: [
            "Davi",
            "Salomão",
            "Josias",
            "Ezequiel",
        ],
        correta: 1
    },

    {
        pergunta: "Qual destes profetas bíblicos foi engolido por um grande peixe e depois libertado?",
        respostas: [
            "Jonas",
            "Isaías",
            "Jeremias",
            "Ezequiel",
        ],
        correta: 0
    },

    {
        pergunta: "Qual é o nome da festa judaica que celebra a libertação do povo de Israel da escravidão no Egito?",
        respostas: [
            "Pascoa",
            "Hanukkah",
            "Purim",
            "Yom Kippur",
        ],
        correta: 0
    }

]

// COLE APÓS O TÉRMINO DO ARRAY

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


//loop ou laço de repetição

for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
}