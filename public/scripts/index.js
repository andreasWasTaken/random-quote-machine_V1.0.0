
const root = document.documentElement
const $quoteText = document.getElementById('quoteText')
const $quoteAuthor = document.getElementById('quoteAuthor')
const $nextQuoteBtn = document.getElementById('nextQuoteBtn')

const $langDE = document.getElementById('langDE')
const $langEN = document.getElementById('langEN')

let language = 'langEN'
let source = '../../data/quotesEN.json'


async function getQuote(index) {
    const rawQuotes = await fetch(source)
    const quotes = await rawQuotes.json()
    
    $quoteText.textContent = quotes[index].text
    $quoteAuthor.textContent = quotes[index].author
}

async function getRandomQuote() {
    
    const rawQuotes = await fetch(source)
    const quotes = await rawQuotes.json()

    const random = Math.floor(Math.random() * quotes.length)
    
    $quoteText.innerHTML = quotes[random].text
    $quoteAuthor.textContent = quotes[random].author ? `- ${quotes[random].author}` : 'No Author'
    
}

function chooseRandomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}


const colors = randomColor({
    luminosity: 'dark',
    count: 18
})
console.log(colors);

root.style.setProperty('--clr-random', chooseRandomColor(colors))
getRandomQuote()

$nextQuoteBtn.addEventListener('click', () => {
    root.style.setProperty('--clr-random', chooseRandomColor(colors))
    getRandomQuote()
})

$langDE.addEventListener('click', (event) => {
    language = event.target.id
    source = '../../data/quotesDE.json'
    $nextQuoteBtn.textContent = 'Neues Zitat'
    getRandomQuote()
})

$langEN.addEventListener('click', (event) => {
    language = event.target.id
    source = '../../data/quotesEN.json'
    $nextQuoteBtn.textContent = 'New quote'
    getRandomQuote()
})


