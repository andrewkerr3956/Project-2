Name: Andrew Kerr

Overview/Description: This project is utilizing the GIPHY API to send a request through the API and get a response that will hold the results. The results are looped through, and the GIF images or stickers are displayed on the page. Also, please note that I purposely left the JavaScript code commented out in my "main.js" file. This is because I wanted to show how I originally handled the request/response to the GIPHY API.

Functionality: This project is very simple to use. First, you search for something. Next, you choose if you want to search for GIFs or stickers (GIFS is the default option). Then, you can limit the number of results that are returned to you (The API key that was used has a limit of 50 results so the maximum is 50, which is also the default number, and the minimum is 0). Finally, hit search and view the returned reponse for the search you conducted. If the user searches for something that doesn't have any results or if they set the limit to 0, the site will display "No results found."

Technologies Used: HTML5, CSS3, JavaScript, jQuery, Bootstrap 4, SASS (.scss).

Ideas for future improvement: Develop a more efficient fail method for if the AJAX request is not successful, add styling to the Bootstrap cards that were used to hold the results, and possibly add more information about each returned result.