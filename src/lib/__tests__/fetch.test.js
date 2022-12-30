


//! This is the function that you would normally use to make a fetch request
function getUsers() {
  return fetch(`https://jsonplaceholder.typicode.com/users`, {
    method: 'GET',
    headers: { "Content-Type": "application/json" }
  }).then(response => response.json());
}

//* Use this function Instead to make a fetch request using the facade pattern
function getUsers() {
  return getFetch(`https://jsonplaceholder.typicode.com/users`)
}


//* Use this function Instead to make a fetch request using the facade pattern with parameters
function getUserPosts(userId) {
  return getFetch(`https://jsonplaceholder.typicode.com/posts`, {
    userId: userId
  })
}
