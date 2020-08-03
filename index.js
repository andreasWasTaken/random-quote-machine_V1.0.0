
const root = document.documentElement
const $quoteText = document.getElementById('quoteText')
const $quoteAuthor = document.getElementById('quoteAuthor')
const $nextQuoteBtn = document.getElementById('nextQuoteBtn')

async function getQuote(index) {
    const rawQuotes = await fetch('quotes.json')
    const quotes = await rawQuotes.json()
    
    $quoteText.textContent = quotes[index].text
    $quoteAuthor.textContent = quotes[index].author
}

async function getRandomQuote() {
    const rawQuotes = await fetch('quotes.json')
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

root.style.setProperty('--dominant-clr', chooseRandomColor(colors))
getRandomQuote()

$nextQuoteBtn.addEventListener('click', () => {
    root.style.setProperty('--dominant-clr', chooseRandomColor(colors))
    getRandomQuote()
})


