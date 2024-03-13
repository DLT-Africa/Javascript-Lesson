const quoteCon = document.getElementById('qoute-container');

const quoteText = document.getElementById('qoute');

const authorName = document.getElementById('author');

const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


//GET Quote From API

//https://api.quotable.io/random

//Show Loading

const showLoading = () => {
    loader.hidden = false;
    quoteCon.hidden = true;
}

//Hide loading
const hideLoading = () => {
    if(!loader.hidden) {
        quoteCon.hidden = false;
        loader.hidden = true;
    }
}

const getQuote = async() => {

    showLoading()
    const apiUrl = 'https://api.quotable.io/random';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json()
        // console.log(data);

        if(data.author === '') {
            authorName.innerText = 'Unknown';  
        }else {
            authorName.innerText = data.author;
        }

     //check quote length to detemine the styling
        if(data.content.length > 50) {
            quoteText.classList.add('long-quote');
        }else {
            quoteText.classList.remove('long-quote'); 
        }

        
        quoteText.innerText = data.content;

        hideLoading ()
    }catch(error) {
        console.error('Error fetching quote', error)
        getQuote () // retry fetching quote
    }

}

//Tweet
const tweetQuote = () => {
    const quote = quoteText.innerText ;
    const author =  authorName.innerText;
    const twitterUrl =`https://twitter.com/intent/tweet?text=${quote}- ${author}`

    window.open(twitterUrl, "_blank")
}

//Event Listeners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote)

getQuote()