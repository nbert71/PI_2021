

const API_TOKEN = '8cd61c0e5b91b40b6499917b92dde32c';
//Recherche
export function getFilmsFromApiWithSearchedText (text,page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text+ "&page=" + page
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}
// Illustration
export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}
//Info sur film
export function getFilmDetailFromApi (id) {
    return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
        .then((response) => response.json())
        .catch((error) => console.error(error));
}