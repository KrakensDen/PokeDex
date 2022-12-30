
//* the function that is used for the Facade Pattern to be able to refactor the code a lot better
async function getFetch(url, params) {
  const queryString = Object.entries(params).map(param => {
    return `${param[0]}=${param[1]}`
  }).join('&')
  return fetch(`${url}?${queryString}`, {
    method: 'GET',
    headers: { "Content-Type": "application/json" }
  }).then(response => response.json());
}

export default getFetch;