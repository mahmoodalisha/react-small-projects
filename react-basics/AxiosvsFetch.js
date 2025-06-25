/*you can use Axios instead of fetch to call APIs. Axios is a popular third-party HTTP client for making API requests. It provides a more feature-rich and easier-to-use interface compared to the native fetch API. Here are some reasons why you might choose Axios over fetch:*/
//Axios has more intuitive error handling. Unlike fetch, which only rejects on network errors, Axios rejects for both network and HTTP errors (like 404, 500).

//Axios using async await
import axios from 'axios';
async function fetchData() {
  try {
    const response = await axios.get('https://api.example.com/data');
    console.log('Data received:', response.data);
  } catch (error) {
    console.error('There was a problem with the request:', error);
  }
}
fetchData();


//Fetch 
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log('Data received:', data))
  .catch(error => console.error('There was a problem with the fetch operation:', error));

  import axios from 'axios';

//Axios using promises
axios.get('https://api.example.com/data')
  .then(response => {
    console.log('Data received:', response.data);
  })
  .catch(error => {
    console.error('There was a problem with the request:', error);
  });

