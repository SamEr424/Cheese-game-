const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const questions = [
    {
        id: 0,
        text: "Pick a vacation Spot: ",
        answers: [
            {
                text: "New York",
                image: "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
                alt: "the empire state building",
                credit: "Robert Bye"
            },
            {
                text: "Houston",
                image: "https://images.unsplash.com/photo-1587088132107-eda452cf1143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
                alt: "downtown Houston Texas",
                credit: "Matt Wang"
            },
            {
                text: "Seattle",
                image: "https://images.unsplash.com/photo-1542223616-740d5dff7f56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=854&q=80",
                alt: "Seattle home of tech",
                credit: "Andrea Leopardi"
            },
            {
                text: "Birmingham",
                image: "https://images.unsplash.com/photo-1668466340226-bc3ad25f51aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
                alt: "the home of the Alabama white sauce",
                credit: "Allan Francis"
            },
        ]

    },
    {
        id: 1,
        text: "Pick some food: ",
        answers: [
            {
                text: "Pizza",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
                alt: "A thin crust pizza",
                credit: "Ivan Torres",
            },
            {
                text: "Wagyu",
                image: "https://images.unsplash.com/photo-1648977576265-523a4b7df3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
                alt: "Real Japanese wagyu",
                credit: "Kina",
            },
            {
                text: "Hamburger",
                image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
                alt: "american burger",
                credit: "Mike",
            },
            {
                text: "Brisket",
                image: "https://images.unsplash.com/photo-1614231555937-aaf95bb2a383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
                alt: "Texas Brisket",
                credit: "Israel",
            }
        ]

    },
    {
        id: 2,
        text: "Pick a Home: ",
        answers: [
            {
                text: "Spanish",
                image: "https://images.unsplash.com/photo-1675799283418-87b504193ca2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80",
                alt: "Spanish style architecture",
                credit: "Alexsander"
            },
            {
                text: "Gothic",
                image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=684&q=80",
                alt: "Gothic Germany",
                credit: "Tim"
            },
            {
                text: "Modern",
                image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
                alt: "Modern style architecture",
                credit: "R architecture"
            },
            {
                text: "Log Cabin",
                image: "https://images.unsplash.com/photo-1622150736551-03defd21c5cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
                alt: "cabin in the woods",
                credit: "Alice"
            },
        ]

    }
]

const answers = [
    {
        combination: ["New York", "Pizza", "Spanish"],
        text: "Blue Cheese",
        image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
        alt: "You're blue cheese"
    },
    {
        combination: ["Seattle", "Wagyu", "Modern"],
        text: "Feta",
        image: "https://images.unsplash.com/photo-1505575967455-40e256f73376?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        alt: "You are Feta Cheese"
    },
    {
        combination: ["Houston", "Brisket", "Log Cabin"],
        text: "Mozzarella",
        image: "https://images.unsplash.com/photo-1610817153377-e54299ffdb1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        alt: "You are mozzarella"
    },
    {
        combination: ["Birmingham", "Hamburger", "Gothic"],
        text: "Cheddar",
        image: "https://images.unsplash.com/photo-1625084560643-3ce33792c2bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        alt: "You are Cheddar"
    }
]

const unansweredQuestions = []
const chosenAnswers = []

const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div')
        titleBlock.id = question.id
        titleBlock.classList.add('title-block')
        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text

        titleBlock.append(titleHeading)

        questionDisplay.append(titleBlock)

        const answersBlock = document.createElement('div')
        answersBlock.id = question.id + "-questions"
        answersBlock.classList.add('answer-options')

        unansweredQuestions.push(question.id)

        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', () => handleClick(question.id, answer.text))
            const answerImage = document.createElement('img')
            answerImage.setAttribute('src', answer.image)
            answerImage.setAttribute('alt', answer.alt)

            const answerTitle = document.createElement('h3')
            answerTitle.textContent = answer.text

            const answerInfo = document.createElement('p')
            const imageLink = document.createElement('a')
            imageLink.setAttribute('href', answer.credit)
            imageLink.textContent = answer.credit
            const sourceLink = document.createElement('a')
            sourceLink.textContent = 'Unsplash'
            sourceLink.setAttribute('src', 'https://www.unsplash.com')
            answerInfo.append(imageLink, ' to ', sourceLink)





            answerBlock.append(answerImage, answerTitle, answerInfo)

            answersBlock.append(answerBlock)
        })

        questionDisplay.append(answersBlock)
    })
}

populateQuestions()

const handleClick = (questionId, chosenAnswer) => {
    if (unansweredQuestions.includes(questionId))
    chosenAnswers.push(chosenAnswer)
    const itemToRemove = unansweredQuestions.indexOf(questionId)

    if(itemToRemove > -1) {
        unansweredQuestions.splice(itemToRemove, 1)
    }
    console.log(chosenAnswers)
    console.log(unansweredQuestions)

    disableQuestionBlock(questionId, chosenAnswer)

    const lowestQuestionId = Math.min(...unansweredQuestions)
    location.href = '#' + lowestQuestionId

    if(!unansweredQuestions.length) {
        showAnswer()
    }

}

const showAnswer = () =>{

    let result
    answers.forEach(answer => {
        if(
            chosenAnswers.includes(answer.combination[0]) +
            chosenAnswers.includes(answer.combination[1]) +
            chosenAnswers.includes(answer.combination[2])
        ) {
            result = answer
        } else if (!result) {
            result = answers[0]
        }
    })

    console.log(result)


    const answerBlock = document.createElement('div')
    answerBlock.classList.add('result-block')
    const answerTitle = document.createElement('h3')
    answerTitle.textContent = result.text
    const answerImage = document.createElement('img')
    answerImage.setAttribute('src', result.image)
    answerImage.setAttribute('alt', result.alt)

    answerBlock.append(answerTitle, answerImage)

    answerDisplay.append(answerBlock)

    const allAnswerBlocks = document.querySelectorAll('.answer-block')
    Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))

}


const disableQuestionBlock = (questionId, chosenAnswer) => {
    const currentQuestionBlock = document.getElementById(questionId + "-questions")

    Array.from(currentQuestionBlock.children).forEach(block => {
        if (block.children.item(1).innerText !== chosenAnswer) {
            block.style.opacity = "50%"
        }
    })
}


