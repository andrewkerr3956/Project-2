// jQuery
$(document).ready( () => {
    // API Key necessary to utilize the GIPHY API
    let api_key = 'P008Twl6jsjXcFQn9lQSzLrTQRkkYTgT';

    let fetchGiphy = async(search_query, resultType, limit) => {
        // Set variables to be in the same format required for the GET request
        let q = search_query;
        let l = limit;
        // AJAX method performing the request to the GIPHY API
        $.ajax ({
            url: await `http://api.giphy.com/v1/${resultType}/search`,
            type: 'get',
            dataType: 'json',
            data: {api_key, q, l},
            success: (data) => {
                // If there is at least 1 result, call the loop method. Else, display 'No results found'
                if(data.data.length > 0) {
                    loopGiphyResults(data);
                }
                else {
                    $('#flexbox').html('No results found.');
                }
            },
            error: (err) => {
                // In case of any errors
                console.log('An error has occurred: ' + err);
            }
        });
        
    };

    // Loop through results from the response of the GIPHY API
    let loopGiphyResults = (data) => {
        $('#flexbox').html('');
        for (let x = 0; x < data.data.length; x++) {
            $('#flexbox').append(`<div id='item${x}' class='flex-item card'>
            <div class='card-body'>
                <img class='img-fluid' src='${data.data[x].images.original.url}' />
            </div>
            <div class='card-footer'>
                <h4>${data.data[x].title}</h4> 
                <p>${data.data[x].username}</p>
                </div></div>`);
        }
        data = '';
        $('#footer').css('position', 'relative');
    };

    $('#search-button').on('click', () => {
        let search_query = $('#search-query').val();
        let resultType = $(`input[name='type']:checked`).val();
        let limit = $('#search-limit').val();
        $('#footer').css('position', 'absolute');
        fetchGiphy(search_query, resultType, limit);
    });
});


// BELOW IS THE ORIGINAL JAVASCRIPT VERSION.

/*
window.addEventListener('load', () => {
    // Grab the API key
    let api_key = 'P008Twl6jsjXcFQn9lQSzLrTQRkkYTgT';

    // Get the search button by ID and then add a click event listener to it
    let fetchGiphy = async (search_query, resultType, limit) => {
        let giphyResult = await fetch(`http://api.giphy.com/v1/${resultType}/search?api_key=${api_key}&q=${search_query}&limit=${limit}`);
        // Wait for the fetch to happen, then wait for it to be parsed into JSON.
        let data = await giphyResult.json();
        // At least one result was found.
        if (data.data.length > 0) {
            loopGiphyResults(data);
        }
        // No results were found.
        else {
            document.getElementById('flexbox').innerHTML = '<h1>No results found.</h1>';
        }
    };
    let loopGiphyResults = async (data) => {
        const output = document.getElementById('flexbox');
         Clearing the inner HTML of flexbox div is important because otherwise
        when user searches for more gifs or stickers, then it would stack on top of the
        previous searches if the inner HTML is not cleared
        output.innerHTML = '';
         Through the use of Bootstrap cards, we can display some information about
        the gifs/stickers rather than just displaying them. 
        for (let x = 0; x < data.data.length; x++) {
            output.innerHTML += `<div id='item${x}' class='flex-item card'>
            <div class='card-body'>
                <img class='img-fluid' src='${data.data[x].images.original.url}' />
            </div>
            <div class='card-footer'>
                <h4>${data.data[x].title}</h4> 
                <p>${data.data[x].username}</p>
                </div></div>`;
        }
        // Clear out the results of the fetch as well as the data received from it
        giphyResult = '';
        data = '';
         This footer positioning is relative to make it below the results returned from
        the results of the GIPHY API 
        document.getElementById('footer').style.position = 'relative';
    }

    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', () => {
        // Grab the search string, result type, and the results limit from input
        let search_query = document.getElementById('search-query').value;
        let resultType = document.querySelector(`input[name='type']:checked`).id;
        let limit = document.getElementById('search-limit').value;
        // This footer styling is to make the position absolute in case of no results.
        document.getElementById('footer').style.position = 'absolute';
        fetchGiphy(search_query, resultType, limit);
    });



});
*/