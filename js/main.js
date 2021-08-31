// NOTE: Fix an issue where the button event listener stops working after the first search.
window.addEventListener('load', () => {
    // Grab the API key
    let api_key = 'P008Twl6jsjXcFQn9lQSzLrTQRkkYTgT';

    // Get the search button by ID and then add a click event listener to it
    let fetchGiphy = async (search_query, resultType) => {
        let giphyResult = await fetch(`http://api.giphy.com/v1/${resultType}/search?api_key=${api_key}&q=${search_query}`)
        let data = await giphyResult.json();
        console.log(data);
        if (data.data.length > 0) {
            loopGiphyResults(data);
        }
        else {
            document.getElementById('flexbox').innerHTML = '<h1>No results found.</h1>';
        }
    };

    let loopGiphyResults = async (data) => {
        const output = document.getElementById('flexbox');
        /* Clearing the inner HTML of flexbox div is important because otherwise
        when user searches for more gifs or stickers, then it would stack on top of the
        previous searches if the inner HTML is not cleared*/
        output.innerHTML = '';
        /* Through the use of Bootstrap cards, we can display some information about
        the gifs/stickers rather than just displaying them. */
        for (let x = 0; x < data.data.length; x++) {
            output.innerHTML += `<div id='item${x}' class='flex-item card'>
            <div class='card-body'>
                <img class='img-fluid' src='${data.data[x].images.original.url}' />
            </div>
            <div class='card-footer'>
                <h4>${data.data[x].title}</h4> 
                <p>${data.data[x].username}</p>
                </div>`;
        }
        // Clear out the results of the fetch as well as the data received from it
        giphyResult = '';
        data = '';
        document.getElementById('footer').style.position = 'relative';
    }


    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', () => {
        let search_query = document.getElementById('search-query').value;
        let resultType = 'gifs';
        document.getElementById('footer').style.position = 'absolute';
        fetchGiphy(search_query, resultType);
    });



});