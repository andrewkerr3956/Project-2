window.addEventListener('load', () => {
    // Grab the API key
    let api_key = 'P008Twl6jsjXcFQn9lQSzLrTQRkkYTgT';

    // Get the search button by ID and then add a click event listener to it
    let fetchGiphy = async(search_query, resultType) => {
        let giphyResult = await fetch(`http://api.giphy.com/v1/${resultType}/search?api_key=${api_key}&q=${search_query}`)
        let data = await giphyResult.json();
        console.log(data);
        for(let x = 0; x < data.data.length; x++) {
            document.body.innerHTML += `<img src='${data.data[x].images.original.url}' />`;
        }
    };


    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', () => {
        let search_query = document.getElementById('search-query').value;
        let resultType = 'gifs';
        fetchGiphy(search_query, resultType);
    });
    


});