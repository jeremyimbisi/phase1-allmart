// fetch("http://localhost:3000/characters")
//   .then(response => response.json())
//   .then(jsData => {
//     for (const charactersObj of jsData) {
//       console.log(charactersObj.name);

//       // Create an li element
//       const liElement = document.createElement('li');
//       liElement.innerText = charactersObj.name;

//       const imgElement = document.createElement('img');

//       // Create a span element for displaying votes
//       const votesSpan = document.createElement('span');
//       let votesSpanc = 0;
//       votesSpan.textContent = `Votes: ${votesSpanc}`;

//       // Create a button for voting
//       const voteBtn = document.createElement('button');
//       voteBtn.innerText = 'Vote';
//       voteBtn.addEventListener('click', voteCount);

//       function voteCount() {
//         votesSpanc++;
//         votesSpan.textContent = `Votes: ${votesSpanc}`;
//       }

//       liElement.addEventListener('click', ((obj) => {
//         return () => {
//           // Create an image element
//           imgElement.src = obj.image;
//           imgElement.alt = obj.name;
//           imgElement.width = 100;
//           imgElement.height = 100;
//         };
//       })(charactersObj));

//       // Append the image, votes, and vote button to the li element
//       liElement.appendChild(imgElement);
//       liElement.appendChild(votesSpan);
//       liElement.appendChild(voteBtn);

//       // Append the li element to the animalList ul
//       animalList.appendChild(liElement);
//     }
//   })
//   .catch(error => {
//     console.error(error);
//   });


// Fetch the data from the server
fetch('http://localhost:3000')
  .then(response => response.json())
  .then(data => {
    const products = data.products;

    // Get the container element where the products will be displayed
    const container = document.getElementById('productContainer');

    // Iterate over the products and create HTML elements for each product
    products.forEach(product => {
      // Create a div element for each product
      const productDiv = document.createElement('div');
      productDiv.className = 'product';

      // Create an image element
      const image = document.createElement('img');
      image.src = product.image;
      image.alt = product.productName;

      // Create a heading element for the product name
      const productName = document.createElement('h2');
      productName.textContent = product.productName;

      // Create a paragraph element for the description
      const description = document.createElement('p');
      description.textContent = product.description;

      // Append the image, product name, and description to the product div
      productDiv.appendChild(image);
      productDiv.appendChild(productName);
      productDiv.appendChild(description);

      // Append the product div to the container
      container.appendChild(productDiv);
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });

// Get the elements using their class names
var addToListButtons = document.querySelectorAll('.buy.button');
var resetButton = document.querySelector('.Reset.btn');

// Variable to keep track of the count
var count = 0;

// Event listener for the "Add to list" button click
addToListButtons.forEach(button => {
  button.addEventListener('click', function() {
    count++; // Increment the count by 1
    resetButton.innerHTML = 'Reset (' + count + ')'; // Update the reset button text
  });
});

// Event listener for the "Reset" button click
resetButton.addEventListener('click', function() {
  // Perform the actions to delete the items from the server
  // Replace the following line with your server delete logic

  // Example alert message to demonstrate the action
  alert('Items deleted from the server.');

  count = 0; // Reset the count to 0
  resetButton.innerHTML = 'Reset'; // Reset the reset button text
});


