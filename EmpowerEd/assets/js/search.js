// Get the search input and button elements
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

// Add an event listener to the search button
searchBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent the default form submission

  // Get the search query from the input field
  const searchQuery = searchInput.value.trim();

  // Check if the search query is not empty
  if (searchQuery !== '') {
    // Call the search function with the query
    search(searchQuery);
  }
});

// Search function
function search(query) {
  // You can use an API, a database, or a simple array to store the data
  // For this example, we'll use a simple array of objects
  const searchData = [
    { id: 1, title: 'Learning Today, Leading Tomorrow', description: 'A Learning website for children with autism spectrum disorder' },
    { id: 2, title: 'Personalized Learning Paths', description: 'Customized lesson plans based on your child\'s goals and objectives' },
    { id: 3, title: 'Interactive Video Lessons', description: 'Engaging video lessons that make learning fun' },
    
  ];

  // Filter the data based on the search query
  const searchResults = searchData.filter((item) => {
    const title = item.title.toLowerCase();
    const description = item.description.toLowerCase();
    const query = query.toLowerCase();

    return title.includes(query) || description.includes(query);
  });

  // Display the search results
  displaySearchResults(searchResults);
}

// Display search results function
function displaySearchResults(results) {
  // Create a container to display the search results
  const searchResultsContainer = document.getElementById('search-results');

  // Clear the container
  searchResultsContainer.innerHTML = '';

  // Loop through the search results and create a list item for each
  results.forEach((result) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${result.title} - ${result.description}`;
    searchResultsContainer.appendChild(listItem);
  });
}

// Create a container to display the search results
const searchResultsContainer = document.createElement('ul');
searchResultsContainer.id = 'search-results';
document.body.appendChild(searchResultsContainer);