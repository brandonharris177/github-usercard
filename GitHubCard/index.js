/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// axios.get('https://rickandmortyapi.com/api/')
//   .then ((response) => {
//     console.log(response)
//   });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

// axios.get('https://api.github.com/users/brandonharris177')
//   .then (element => {
//     const card = createCard(element.data);
//     const cards = document.querySelector('.cards');
//     cards.appendChild(card);
//     return cards;
//   })

axios.get('https://api.github.com/users/brandonharris177')
  .then (gitHubInfo => {
    const card = createCard(gitHubInfo.data);
    const cards = document.querySelector('.cards');
    cards.appendChild(card);
    return cards;
  })

// gitHubInfo.forEach(data => {
//   cards.appendChild(createPanel(Object))
// })

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const followersArray = [
//   'https://api.github.com/users/juarezfrench',
//   'https://api.github.com/users/Jonathan-YungHsin-Ho',
//   'https://api.github.com/users/DanielWallen87',
//   'https://api.github.com/users/jaredkain',
//   'https://api.github.com/users/rleslie1015'
// ];

// followersArray.forEach(handle =>{
//   axios.get(`${handle}`)
//   .then (data => {
//     const card = createCard(data.data);
//     const cards = document.querySelector('.cards');
//     cards.appendChild(card);
//     return cards;
//   });
// });


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/


function createCard(gitHubInfo) {
  // define new elements
  const card = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const cardName = document.createElement('h3');
  const userName = document.createElement('p');
  const userLocation = document.createElement('p');
  const userProfile = document.createElement('p');
  const userProfileLink = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');
  
  // Setup structure of elements
  card.appendChild(cardImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userProfile);
  userProfile.appendChild(userProfileLink);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);
  
  // set class names
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  cardName.classList.add('name');
  userName.classList.add('username');
  
  // set text content
  cardImg.src = gitHubInfo.avatar_url;
  cardName.textContent = gitHubInfo.name;
  userName.textContent = gitHubInfo.login;
  userLocation.textContent = gitHubInfo.location;
  userProfileLink.textContent = gitHubInfo.url;
  userFollowers.textContent = `Followers: ${gitHubInfo.followers}`;
  userFollowing.textContent = `Following: ${gitHubInfo.following}`;
  userBio.textContent = gitHubInfo.bio;
  
  console.log(card);
  return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
