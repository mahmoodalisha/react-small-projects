//Example of API Handling with Promises
// Making an API request
fetch('https://api.example.com/data')
  .then(response => {
    // Check if the response is OK (status code in the range 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the JSON data from the response
    return response.json();
  })
  .then(data => {
    // Handle the data from the API
    console.log('Data received:', data);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('There was a problem with the fetch operation:', error);
  });
//The fetch function initiates an API request and returns a Promise.