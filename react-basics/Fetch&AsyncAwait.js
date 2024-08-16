//Modern Syntax: async and await are built on top of Promises and provide a more synchronous-looking syntax for handling asynchronous operations.
async function fetchData() {
    try {
      let response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      let data = await response.json();
      console.log('Data received:', data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  fetchData();
  