export const request = (destiny, queryString = '') => {
    const url = 'https://api.themoviedb.org/3/'
     + destiny
      + '?' + queryString + '&api_key=612ebf63e580831559365d1bc93af503'
    return fetch(url).then(response => response.json(), response => console.log(response))
}