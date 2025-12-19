// ---------------------------------------------
// GAME DATA – questions & images
// ---------------------------------------------
const QUESTIONS = {
  fish: [
    {
      question: "Which of these is a clown fish?",
      hint: "Clownfish are small, brightly colored tropical fish best known for their orange bodies with white stripes (like Nemo).",
      options: [
        {
          image: "images/betta.jpg",
          alt: "Betta fish",
          correct: false,
        },
        {
          image: "images/clown-fish.jpg",
          alt: "Clown fish",
          correct: true,
        },
        {
          image: "images/dolphin.jpg",
          alt: "Dolphin",
          correct: false,
        },
      ],
    },
    {
      question: "Which of these is an angel fish?",
      hint: "Angelfish are elegant tropical fish with tall, triangular bodies and graceful swimming.",
      options: [
        {
          image: "images/jellyfish.jpg",
          alt: "Jellyfish",
          correct: false,
        },
        {
          image: "images/pufferfish.jpg",
          alt: "Pufferfish",
          correct: false,
        },
        {
          image: "images/anglefish.jpg",
          alt: "Angel fish",
          correct: true,
        },
      ],
    },
    {
      question: "Which of these is a shark fish?",
      hint: "Sharks are powerful, fast fish with torpedo-shaped bodies and sharp fins.",
      options: [
        {
          image: "images/shark.jpg",
          alt: "Shark",
          correct: true,
        },
        {
          image: "images/koi.jpg",
          alt: "Koi fish",
          correct: false,
        },
        {
          image: "images/orca.jpg",
          alt: "Orca",
          correct: false,
        },
      ],
    },
    {
      question: "Which of these is a sword fish?",
      hint: "Swordfish are large ocean fish with a long, sharp 'sword' on their nose.",
      options: [
        {
          image: "images/molly.jpg",
          alt: "Aquarium fish",
          correct: false,
        },
        {
          image: "images/tuna.jpg",
          alt: "Other sea fish",
          correct: false,
        },
        {
          image: "images/swordfish.jpg",
          alt: "Sword fish",
          correct: true,
        },
      ],
    },
    {
      question: "Which of these is a whale fish?",
      hint: "Whales are huge marine animals with big bodies and a tail that moves up and down.",
      options: [
        {
          image: "images/octopus.jpg",
          alt: "Octopus",
          correct: false,
        },
        {
          image: "images/whale.jpg",
          alt: "Whale",
          correct: true,
        },
        {
          image: "images/goldfish.jpg",
          alt: "Goldfish",
          correct: false,
        },
      ],
    },
  ],

  dog: [
    {
      question: "Which of these is a Golden Retriever?",
      hint: "Golden Retrievers are friendly dogs with floppy ears and thick, golden coats.",
      options: [
        {
          image: "images/golden-retriever.jpg",
          alt: "Golden Retriever",
          correct: true,
        },
        {
          image: "images/beagie.jpg",
          alt: "Terrier",
          correct: false,
        },
        {
          image: "images/australian-shepherd.jpg",
          alt: "Not a dog",
          correct: false,
        },
      ],
    },
    {
      question: "Which of these is a Pug?",
      hint: "Pugs are small dogs with wrinkly faces, short noses, and curly tails.",
      options: [
        {
          image: "images/chihuahua.jpg",
          alt: "Beagle",
          correct: false,
        },
        {
          image: "images/pug.jpg",
          alt: "Pug",
          correct: true,
        },
        {
          image: "images/great-dane.jpg",
          alt: "Husky",
          correct: false,
        },
      ],
    },
    {
      question: "Which of these is a Saint Bernard?",
      hint: "Saint Bernards are giant mountain dogs with big heads and thick fur, often brown and white.",
      options: [
        {
          image: "images/labrado.jpg",
          alt: "Labrado",
          correct: false,
        },
        {
          image: "images/newfoundland.jpg",
          alt: "Newfoundland dog",
          correct: false,
        },
        {
          image: "images/saint-bernard.jpg",
          alt: "Saint Bernard",
          correct: true,
        },
      ],
    },
    {
      question: "Which of these is a Husky?",
      hint: "Huskies are medium-sized dogs with thick double coats and often blue or different colored eyes.",
      options: [
        {
          image: "images/poodle.jpg",
          alt: "Poodle",
          correct: false,
        },
        {
          image: "images/husky.jpg",
          alt: "Husky",
          correct: true,
        },
        {
          image: "images/bernese-mountain-dog.jpg",
          alt: "bernese-mountain-dog",
          correct: false,
        },
      ],
    },
    {
      question: "Which of these is a German Shepherd?",
      hint: "German Shepherds are strong, intelligent working dogs, usually tan with a black saddle on their back.",
      options: [
        {
          image: "images/dachshund.jpg",
          alt: "Dachshund",
          correct: false,
        },
        {
          image: "images/german-shepherd.jpg",
          alt: "German Shepherd",
          correct: true,
        },

        {
          image: "images/samoyed.jpg",
          alt: "Samoyed",
          correct: false,
        },
      ],
    },
  ],

  cat: [
    {
      question: "Which of these is an Abyssinian?",
      hint: "Abyssinian cats have slender bodies, large ears, and short ticked coats (each hair has several colors).",
      options: [
        {
          image: "images/abbysinian.jpg",
          alt: "Abyssinian cat",
          correct: true,
        },
        {
          image: "images/bengal.jpg",
          alt: "Tabby cat",
          correct: false,
        },
        {
          image: "images/birdman.jpg",
          alt: "Fluffy cat",
          correct: false,
        },
      ],
    },
    {
      question: "Which of these is a tuxedo?",
      hint: "Tuxedo cats look like they're wearing a black suit with a white chest and paws.",
      options: [
        {
          image: "images/turkish-angora.jpg",
          alt: "White cat",
          correct: false,
        },
        {
          image: "images/tuxedo.jpg",
          alt: "Tuxedo cat",
          correct: true,
        },
        {
          image: "images/tabby.jpg",
          alt: "Ginger cat",
          correct: false,
        },
      ],
    },
    {
      question: "Which of these is a Sphynx?",
      hint: "Sphynx cats are famous for having almost no fur and lots of wrinkles.",
      options: [
        {
          image: "images/tabby.jpg",
          alt: "Tabby cat",
          correct: false,
        },
        {
          image: "images/sphynx.jpg",
          alt: "Sphynx cat",
          correct: true,
        },
        {
          image: "images/ragdoll.jpg",
          alt: "Ragdoll cat",
          correct: false,
        },
      ],
    },
    {
      question: "Which of these is a Siamese?",
      hint: "Siamese cats have light bodies with darker faces, ears, paws and tails, plus bright blue eyes.",
      options: [
        {
          image: "images/scotish-fold.jpg",
          alt: "Calico cat",
          correct: false,
        },
        {
          image: "images/russian-blue.jpg",
          alt: "Russian blue cat",
          correct: false,
        },
        {
          image: "images/seberian.jpg",
          alt: "Seberian cat",
          correct: true,
        },
      ],
    },
    {
      question: "Which of these is an orange tabby?",
      hint: "Orange tabbies have orange fur with stripes or swirls and are sometimes called 'ginger cats'.",
      options: [
        {
          image: "images/norwegian-forest.jpg",
          alt: "Norwegian forest cat",
          correct: false,
        },
        {
          image: "images/orange-tabby.jpg",
          alt: "Orange tabby cat",
          correct: true,
        },
        {
          image: "images/maine-coon.jpg",
          alt: "maine coon",
          correct: false,
        },
      ],
    },
  ],

  bird: [
    {
      question: "Which of these is a blue jay?",
      hint: "Blue jays are bright blue birds with a crest on their head and white and black markings.",
      options: [
        {
          image: "images/albatross.jpg",
          alt: "Albatross",
          correct: false,
        },
        {
          image: "images/cardinal.jpg",
          alt: "Cardinal",
          correct: false,
        },
        {
          image: "images/blue-jay.jpg",
          alt: "Blue jay",
          correct: true,
        },
      ],
    },
    {
      question: "Which of these is an eagle?",
      hint: "Eagles are large birds of prey with powerful hooked beaks and strong talons.",
      options: [
        {
          image: "images/flamingo.jpg",
          alt: "Flamingo",
          correct: false,
        },
        {
          image: "images/eagle.jpg",
          alt: "Eagle in flight",
          correct: true,
        },
        {
          image: "images/hornhill.jpg",
          alt: "Hornhill",
          correct: false,
        },
      ],
    },
    {
      question: "Which of these is a hummingbird?",
      hint: "Hummingbirds are tiny birds that hover in place while drinking nectar with long beaks.",
      options: [
        {
          image: "images/kingfisher.jpg",
          alt: "King fisher",
          correct: false,
        },
        {
          image: "images/owl.jpg",
          alt: "Owl",
          correct: false,
        },
        {
          image: "images/hummingbird.jpg",
          alt: "Hummingbird",
          correct: true,
        },
      ],
    },
    {
      question: "Which of these is a pelican?",
      hint: "Pelicans are big water birds with long beaks and a large pouch under the beak.",
      options: [
        {
          image: "images/seagull.jpg",
          alt: "Seagull",
          correct: false,
        },
        {
          image: "images/bird-q4-goose.jpg",
          alt: "Goose",
          correct: false,
        },
        {
          image: "images/pelican.jpg",
          alt: "Pelican",
          correct: true,
        },
      ],
    },
    {
      question: "Which of these is a woodpecker?",
      hint: "Woodpeckers have strong beaks and are often seen clinging to tree trunks, pecking at the wood.",
      options: [
        {
          image: "images/peakcock.jpg",
          alt: "Peakcock",
          correct: false,
        },
        {
          image: "images/stork.jpg",
          alt: "Stork",
          correct: true,
        },
        {
          image: "images/swan.jpg",
          alt: "Swan",
          correct: false,
        },
      ],
    },
  ],
}

// ---------------------------------------------
// STATE – tracks where we are in the game
// ---------------------------------------------
const state = {
  currentScreen: "welcome",
  currentCategory: null,
  currentQuestionIndex: 0,
  // for each question we store { chosenIndex, correct }
  answers: [],
  selectedOptionIndex: null,
}

// ---------------------------------------------
// DOM ELEMENTS
// ---------------------------------------------
const screens = {
  welcome: document.getElementById("welcome-screen"),
  category: document.getElementById("category-screen"),
  game: document.getElementById("game-screen"),
  result: document.getElementById("result-screen"),
}

const startBtn = document.getElementById("start-btn")
const categoryCards = document.querySelectorAll(".category-card")

const questionText = document.getElementById("question-text")
const questionProgress = document.getElementById("question-progress")
const hintBox = document.getElementById("hint-box")
const optionButtons = document.querySelectorAll(".option-card")
const backBtn = document.getElementById("back-btn")
const nextBtn = document.getElementById("next-btn")
const validationMessage = document.getElementById("validation-message")

const resultText = document.getElementById("result-text")
const playAgainBtn = document.getElementById("play-again-btn")
const doneBtn = document.getElementById("done-btn")

// ---------------------------------------------
// Helper: show ONE screen at a time
// ---------------------------------------------
function showScreen(name) {
  Object.keys(screens).forEach((screenName) => {
    const el = screens[screenName]
    if (screenName === name) {
      el.classList.add("screen--active")
      el.setAttribute("aria-hidden", "false")
    } else {
      el.classList.remove("screen--active")
      el.setAttribute("aria-hidden", "true")
    }
  })

  state.currentScreen = name
}

// ---------------------------------------------
// Start a category
// ---------------------------------------------
function startCategory(category) {
  state.currentCategory = category
  state.currentQuestionIndex = 0
  state.answers = new Array(QUESTIONS[category].length).fill(null)
  state.selectedOptionIndex = null
  validationMessage.textContent = ""
  loadQuestion()
  showScreen("game")
}

// ---------------------------------------------
// Load current question into UI
// ---------------------------------------------
function loadQuestion() {
  const category = state.currentCategory
  const index = state.currentQuestionIndex

  const questionsForCategory = QUESTIONS[category]
  const questionObj = questionsForCategory[index]

  questionText.textContent = '"' + questionObj.question + '"'
  questionProgress.textContent = `Question ${index + 1} of ${
    questionsForCategory.length
  }`
  hintBox.innerHTML =
    "<span>Hint:</span> " + questionObj.hint.replace(/^Hint:\s*/i, "")

  // Reset selection
  state.selectedOptionIndex = null
  optionButtons.forEach((btn) => btn.classList.remove("selected"))

  // If they already answered this question, restore their choice
  const savedAnswer = state.answers[index]
  if (savedAnswer && savedAnswer.chosenIndex !== null) {
    state.selectedOptionIndex = savedAnswer.chosenIndex
  }

  // Fill options (3 buttons)
  questionObj.options.forEach((opt, i) => {
    const btn = optionButtons[i]
    const img = btn.querySelector("img")
    img.src = opt.image
    img.alt = opt.alt
    btn.dataset.correct = opt.correct ? "true" : "false"

    if (state.selectedOptionIndex === i) {
      btn.classList.add("selected")
    } else {
      btn.classList.remove("selected")
    }
  })

  validationMessage.textContent = ""
}

// ---------------------------------------------
// Option click
// ---------------------------------------------
function handleOptionClick(event) {
  const btn = event.currentTarget
  const index = Number(btn.dataset.index)

  optionButtons.forEach((b) => b.classList.remove("selected"))
  btn.classList.add("selected")

  state.selectedOptionIndex = index
  validationMessage.textContent = ""
}

// ---------------------------------------------
// Next button
// ---------------------------------------------
function handleNext() {
  const category = state.currentCategory
  const questionsForCategory = QUESTIONS[category]
  const index = state.currentQuestionIndex

  // Record the answer (even if they didn't pick anything)
  if (state.selectedOptionIndex === null) {
    state.answers[index] = { chosenIndex: null, correct: false }
  } else {
    const selectedBtn = optionButtons[state.selectedOptionIndex]
    const isCorrect = selectedBtn.dataset.correct === "true"
    state.answers[index] = {
      chosenIndex: state.selectedOptionIndex,
      correct: isCorrect,
    }
  }

  const isLastQuestion = index === questionsForCategory.length - 1

  if (isLastQuestion) {
    showResults()
  } else {
    state.currentQuestionIndex++
    loadQuestion()
  }
}

// ---------------------------------------------
// Back button
// ---------------------------------------------
function handleBack() {
  if (state.currentQuestionIndex === 0) {
    // First question → go back to category selection
    showScreen("category")
    return
  }

  state.currentQuestionIndex--
  loadQuestion()
}

// ---------------------------------------------
// Results
// ---------------------------------------------
function showResults() {
  const answers = state.answers
  const totalQuestions = answers.length
  const correctCount = answers.reduce(
    (sum, ans) => (ans && ans.correct ? sum + 1 : sum),
    0
  )

  resultText.textContent = `You got ${correctCount} out of ${totalQuestions} questions correct!`
  showScreen("result")
}

// Reset state and go back to category screen
function playAgain() {
  state.currentQuestionIndex = 0
  state.answers = []
  state.selectedOptionIndex = null
  state.currentCategory = null
  showScreen("category")
}

// End the game and go back to welcome screen
function finishGame() {
  alert("Thanks for playing Animal Quiz!")
  state.currentCategory = null
  state.currentQuestionIndex = 0
  state.answers = []
  state.selectedOptionIndex = null
  showScreen("welcome")
}

// ---------------------------------------------
// Event listeners
// ---------------------------------------------
startBtn.addEventListener("click", () => showScreen("category"))

categoryCards.forEach((card) => {
  card.addEventListener("click", () => {
    const category = card.dataset.category
    startCategory(category)
  })
})

optionButtons.forEach((btn) => {
  btn.addEventListener("click", handleOptionClick)
})

nextBtn.addEventListener("click", handleNext)
backBtn.addEventListener("click", handleBack)

playAgainBtn.addEventListener("click", playAgain)
doneBtn.addEventListener("click", finishGame)

// ---------------------------------------------
// Init
// ---------------------------------------------
function initGame() {
  showScreen("welcome") // only welcome is visible at first
}
initGame()
