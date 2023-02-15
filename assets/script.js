const apiKey = "87d845b0b6cf29baa1a73cc34b067a95";
const date = moment().format("YYYY MMMM DD");

console.log(date);

// An event listener to the search form on submit
$('#search-form').submit(function(event) {
    event.preventDefault();
    // Get the search input value
    let city = $('#search-input').val().trim();

    if (!city) {
    // Display an error message to the user and stop the function execution
    console.error('The search field is empty. Make sure to input the city name');
    return;
    }

    // Check if the input value is a valid city name
    let validCityName = /^[a-zA-Z\s]+$/.test(city);

    if (validCityName) {
    // Encode the city name for use in the API endpoint
    let encodedCity = encodeURIComponent(city);
    // Make an API call to check if the city exists
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=${apiKey}`;
    $.get(apiUrl, function(data) {
        console.log(`Valid city name: ${city}`);

    // If the API call fails, show an error message for an invalid city name
    }).fail(function() {
        console.error(`City ${city} does not seem to exist. Please check your spelling`);
    });

    // Show an error message for an invalid city name
    } else {
    console.error(`City ${city} uses invalid characters or symbols, please only use English letters`);
    }
});