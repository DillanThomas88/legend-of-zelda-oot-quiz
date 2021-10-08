// HTML Refs--------------------------------------------------
const elStartButton = document.querySelector('#play')
const mainEL = document.body.children[4]
const cardHeaderEL = mainEL.children[1].children[0]
const cardBodyEL = mainEL.children[1].children[1]
const resultsEL = document.body.children[5]
const formlistener = document.querySelector('#submitresults')



// Constant Arrays--------------------------------------------
const questionIndex = [
    "What's the name of the Hyrulian Princess?",
    "What song is learned in Kakariko Village?",
    "What new item is found in Jabu Jabu's Belly?",
    "What native animals reside in Kakariko Village?",
    "How many medallions are there?",
    "What's the total number of Skulltula's that can be found?",
    "How many songs can be learned including the Scarcrow's Song?",
    "Who can you find in the Windmill?",
    "What's the name of the boss in Gerudo Valley?",
    "Shooting 'this-object' with an arrow, triggers an event to happen.",
    "Who is super Annoying?",
    "Which one of these things can fit into a bottle?",
    "What enemy can steal your items?",
    "What is the mini boss in Dodongo Cavern?",
    "Who plays 'hard to get' even when you show no sign of intrest?"
]
const correctAnswerIndex = [
    "Zelda",
    "Song Of Storms",
    "Boomerang",
    "Cuccos",
    "6",
    "100",
    "13",
    "The Phonogram Man",
    "Twinrova",
    "Eye",
    "Navi",
    "Poe",
    "Like Like",
    "Lizalfos",
    "Ruto"
]
const incorrectAnswerIndex = [
    femaleCharacters = [
        "Nabooru",
        "Impa",
        "Lana",
        "Medli",
        "Fi",
        "Urbosa",
        "Cia",
        "Midna"
    ],
    songsG = [
        "Zelda's Lullaby",
        "Epona's Song",
        "Saria's Song",
        "Suns's Song",
        "Song of Time",
        "Minuet of Forest",
        "Bolero of Fire",
        "Serenade of Water",
        "Requiem of Spirit",
        "Nocturne of Shadow",
        "Prelude of Light",
        "Scarecrow's Song"
    ],
    itemsG = [
        "Deku Stick",
        "Deku Nut",
        "Fairy Slingshot",
        "Bombs",
        "Magic Bean",
        "Fairy Bow",
        "Fire Arrow",
        "Ice Arrow",
        "Light Arrow",
        "Hootshot",
        "Megaton Hammer",
        "Lens of Truth"
    ],
    chickennames = [
        "Newts",
        "Pollywogs",
        "Bunnys",
        "Fireflys",
        "Guppys",
        "Chickadee's"
    ],
    lowNumbersG = [
        "4", "5", "7", "8", "9", "10", "11", "12", "14", "15", "16"
    ],
    highNumbersG = [
        "75",
        "50",
        "110",
        "125",
        "60",
        "80"
    ],
    lowNumbersG = [
        "4", "5", "7", "8", "9", "10", "11", "12", "14", "15", "16"
    ],
    maleCharactersG = [
        "Ganon",
        "Dampe",
        "The Happy Mask Salesman",
        "The Skull Kid",
        "Rauru",
        "Talon",
        "Mido",
        "The Running Man"
    ],
    bossNamesG = [
        "Bongo Bongo",
        "King Dodongo",
        "Phantom Ganon",
        "Volvagia",
        "Morpha",
        "Queen Gohma"
    ],
    objects = [
        "Red Bubble",
        "Red Jelly",
        "Guillotine",
        "Butterfly",
        "Epona",
        "Dog",
        "Treasure Chest",
        "Gossip Stone",
        "Bomb Flower",
    ],
    maleCharactersG = [
        "Ganon",
        "Dampe",
        "The Happy Mask Salesman",
        "The Skull Kid",
        "Rauru",
        "Talon",
        "Mido",
        "The Running Man"
    ],
    moreobjects = [
        "Triforce",
        "Bomb Flower",
        "Tektite",
        "Stinger",
        "Egg",
        "Magic Beans",
        "Magic Powder",
        "Rupee",
        "Spiritual Stones"
    ],
    enemies = [
        "Octorok",
        "Keese",
        "Dark Link",
        "Baby Dodongo",
        "Moblin",
        "Freezard",
        "Field Poe",
        "Skultulla",
        "Ghoma Larva",
        "Tektite",
        "Peahat",
        "Wallmaster",
        "Fire Slug",
        "Spike Trap",
        "Iron Knuckle",
        "Deku Salesman",
        "Wolfos",
        "Stalchild",
        "Guay",
        "Flare Dancer"
    ],
    enemies = [
        "Octorok",
        "Keese",
        "Dark Link",
        "Baby Dodongo",
        "Moblin",
        "Freezard",
        "Field Poe",
        "Skultulla",
        "Ghoma Larva",
        "Tektite",
        "Peahat",
        "Wallmaster",
        "Fire Slug",
        "Spike Trap",
        "Iron Knuckle",
        "Deku Salesman",
        "Wolfos",
        "Stalchild",
        "Guay",
        "Flare Dancer"
    ],
    femaleCharacters = [
        "Nabooru",
        "Impa",
        "Lana",
        "Medli",
        "Fi",
        "Urbosa",
        "Cia",
        "Midna"
    ],
]

// Variables--------------------------------------------------
var isplaying
var cycle = 0
var globalTimer
var correctSlot
var answeredCorrectly = 0
var timeloss = 0
var answerspeed = 0
var elOptions = []
//  Listeners--------------------------------------------------
elStartButton.addEventListener('click', function () {
    var ELcard = document.querySelector('#inactive')
    ELcard.setAttribute('id', 'card-border')
    elStartButton.style = 'display: none'
    ELcard.style = 'filter: none'
    globalTimer = (questionIndex.length * 6) - 1
    isplaying = true
    GetHeader(cycle, GetBody)
    CountDownTimer()
})

//  Functions--------------------------------------------------
function GetHeader(index, func){
    if(cycle === questionIndex.length) { isplaying = false; return}
    SetListeners()   
    // get header info
    cardHeaderEL.children[1].textContent = "Question " + (index + 1)
    cardHeaderEL.children[3].textContent = questionIndex[index]
    // get body info
    func(index)
    cycle++
}
function GetBody(index){    
    var wrongAnswers = incorrectAnswerIndex[index]
    var slots = 4
    var usedSlots = []
    var randomSlot = Math.floor(Math.random() * slots)

    // Generates a correct answer with random location 
    usedSlots.push(randomSlot)
    cardBodyEL.children[randomSlot].children[2].textContent = correctAnswerIndex[index]
    cardBodyEL.children[randomSlot].children[2].setAttribute('data-type','true')
    // pins the correct answer for listeners
    correctSlot = randomSlot
    
    // a recurrsive fuction that generates 3 random wrong answers with random locations
    GenerateWrongAnswers()  
    function GenerateWrongAnswers(){
        // if all slots are full, then kill recurrsive function
        if(usedSlots.length === 4){ return }
        
        var tryRandomNumber = Math.floor(Math.random() * slots)

        // check for repeated slots -- if yes, restart function
        for(i = 0; i < usedSlots.length; i++){
            if(tryRandomNumber === usedSlots[i]){ GenerateWrongAnswers(); return }
        }

        // if no errors, create 1 wrong answer -- restart function
        var newrandom = Math.floor(Math.random() * wrongAnswers.length)
        usedSlots.push(tryRandomNumber)
        cardBodyEL.children[tryRandomNumber].children[2].textContent = wrongAnswers[newrandom]
        cardBodyEL.children[tryRandomNumber].children[2].setAttribute('data-type','false')
        wrongAnswers.splice(newrandom,1)
        GenerateWrongAnswers()
    }
}
function RevealAnswer(target,attribute){

    if(attribute == 'false'){
        var wrongContent = target
        wrongContent.children[0].textContent = "incorrect"
        wrongContent.setAttribute('class','incorrect')
        for(i = 0; i < 4; i++){
            var attr = cardBodyEL.children[i].children[2].getAttribute('data-type')
            if(attr == 'true'){
                var rightContent = cardBodyEL.children[i]
                rightContent.setAttribute('class','correct')
                cardBodyEL.children[i].children[0].textContent = "correct"
                Buffer(rightContent, wrongContent)
                
            }
        }
    } else {
        rightContent = target
        rightContent.children[0].textContent = "correct"
        rightContent.setAttribute('class','correct')
        Buffer(rightContent)
    }
    
}
function Buffer(rightContent, wrongContent){
    ClearListeners()
    var time = 7
    var buffer = setInterval(function(){
        time--

        if(time === 0){
            if(cycle == questionIndex.length){
                isplaying = false
                Results()
                ResetStyles(rightContent, wrongContent)
                var ELcard = document.querySelector('#card-border')
                ELcard.style.filter = "blur(15px)"
                clearInterval(buffer)
                 return
                }
            if(wrongContent == null){
                ResetStyles(rightContent)
            } else { ResetStyles(rightContent, wrongContent) }
            
            GetHeader(cycle, GetBody)
            clearInterval(buffer)
            
        }
    },100)

}
function ClearListeners(){
    for(i = 0; i < cardBodyEL.childElementCount; i++){
        cardBodyEL.children[i].removeEventListener('click', CheckIfTrue)
    }
}
function ResetStyles(rightContent, wrongContent ) {
    rightContent.children[0].textContent = "..."
    rightContent.setAttribute('class', 'nuetral')

    if(wrongContent == null){ return }
    
    wrongContent.children[0].textContent = "..."
    wrongContent.setAttribute('class','nuetral')
}
function CheckIfTrue(event){
    var element = event.target
    var attr = element.children[2].getAttribute('data-type')
    if(attr == 'false'){
        globalTimer = globalTimer - 4
        if(globalTimer < 0){
            globalTimer = 0
        }
        timeloss = timeloss + 4
    } else {
        answerspeed += globalTimer
        answeredCorrectly++
    }

    RevealAnswer(element,attr)
}

function SetListeners(){
    var x = document.querySelectorAll('button')
    for(i = 0; i < x.length; i++){
        x[i].addEventListener('click', CheckIfTrue)
    }
}

function CountDownTimer(){
var militime = 9

    var timeEL = cardHeaderEL.children[2]
    timeEL.textContent = globalTimer + "." + militime

    var timer = setInterval(function(){
        militime--
        timeEL.textContent = globalTimer + "." + militime
        if(militime < 0){
            militime = 9
            globalTimer--
            timeEL.textContent = globalTimer + "." + militime
        }
        if(globalTimer < 10){
            timeEL.style = "color: red"
        }
        if(globalTimer == 0  && militime == 0){
            Results()
            var time = 0
            var ELcard = document.querySelector('#card-border')
            ELcard.style.filter = "blur(10px)"
            clearInterval(timer)
        }
        if(isplaying == false){
            
            clearInterval(timer)
        }
    },100)
}

function Results(){
    var score = answeredCorrectly + answerspeed + Math.floor(globalTimer) - timeloss
    resultsEL.setAttribute('id','results')
    resultsEL.children[1].textContent = answeredCorrectly + " correct"
    resultsEL.children[2].textContent = (questionIndex.length - answeredCorrectly) + " incorrect"
    resultsEL.children[3].textContent = timeloss + " seconds lost"
    resultsEL.children[5].textContent = Math.floor(globalTimer) + " seconds remaining"
    resultsEL.children[4].textContent = "+" + answerspeed + " speed bonus"
    resultsEL.children[6].children[0].textContent = "You got " + score + " points!"
    var playerscore = {
        Score: score,
        Correct: answeredCorrectly,
        Incorrect: questionIndex.length - answeredCorrectly,
        TimeLoss: timeloss,
        RemainingTime: Math.floor(globalTimer),
        SpeedBonus: answerspeed
    }
    localStorage.removeItem('yourData')
    localStorage.setItem('yourData',JSON.stringify(playerscore))
    console.log('newHighScore')
}
