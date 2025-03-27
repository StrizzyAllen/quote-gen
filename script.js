
const submitButton = document.querySelector('.submit');
const quoteText = document.querySelector('.quote');
const authorText = document.querySelector('.author');

async function getQuote() {
    const url = "https://api.api-ninjas.com/v1/quotes";
    const apiKey = '4biy4XmWTDFuLNYLIy3HCQ==oJtWqEVNKDr3uYPq';

    try {
        quoteText.textContent = "Loading....";
        authorText.textContent = "";
        const response = await fetch(url, {
            headers: {
                'X-Api-Key': apiKey
            }
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        quoteText.textContent = json[0].quote;
        authorText.textContent = `— ${json[0].author}`;
    } catch (error) {
        console.error(error.message);
    }
}

submitButton.addEventListener('click', () => {
    getQuote();
});

