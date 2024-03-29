const quoteCon = document.getElementById('qoute-container');

const quoteText = document.getElementById('qoute');

const authorName = document.getElementById('author');

const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader')

//https://type.fit/api/quotes
let apiQuote = [];

//show Loading

function loading() {
    loader.hidden = false;
    quoteCon.hidden = true;
}

//Hide Loading

function complete() {
    quoteCon.hidden = false;
    loader.hidden = true;

}

function newQuote() {

    loading()

    const quote = apiQuote[Math.floor(Math.random() * apiQuote.length)];
     console.log(quote);

     if(!quote.author) {
        authorName.textContent = 'Unknown'
     }else {
        authorName.textContent = quote.author
     }


     //check quote length to detemine the styling

     if(quote.text.length > 50) {
        quoteText.classList.add('long-quote')
     }else {
        quoteText.classList.remove('long-quote')
     }
    

    
    quoteText.textContent = quote.text

    complete()

}

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';

     loading()
    try {
        const response = await fetch(apiUrl);
         apiQuote = await response.json()

        console.log(apiQuote)

        newQuote()

    }catch(error) {
        console.log(error)
    }
}

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorName.textContent}`
    window.open(twitterUrl, "_blank")
}


//Even Listeners
newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)
getQuotes()
