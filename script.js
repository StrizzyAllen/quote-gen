
const submitButton = document.querySelector('.submit');
const quoteText = document.querySelector('.quote');
const authorText = document.querySelector('.author');

async function getQuote() {
    const url = "quotes.json";

    quoteText.textContent = "Loading....";
    authorText.textContent = "";
    const response = await fetch(url);
    const data = await response.json();

    const randomIndex = Math.floor(Math.random() * data.length);
    const quoteData = data[randomIndex];

    quoteText.textContent = quoteData.quote;
    authorText.textContent = quoteData.author;

}

submitButton.addEventListener('click', () => {
    getQuote();
});

