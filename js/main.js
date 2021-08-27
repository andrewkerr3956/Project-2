window.onload = () => {
    // Grab the API key and the element (input textbox) in which the user typed something
    let api_key = 'P008Twl6jsjXcFQn9lQSzLrTQRkkYTgT';
    let search_query = document.getElementById('search-query').value;
    console.log(search_query);
    /* Grab the type of results the user wants to see. Hard-coded value for now, but will
    have functionality added later. */
    let resultType = 'gifs';

    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', () => {
        let giphyResult = fetch(`http://api.giphy.com/v1/${resultType}/search?api_key=${api_key}&q=${search_query}`);
        console.log(giphyResult);
    });

}