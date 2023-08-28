export function sortByReleaseDate(movies) {
    return movies.slice().sort((a, b) => a.year - b.year);
  }
  
 export function sortByTitleAlphabetically(movies) {
    return movies.slice().sort((a, b) => a.title.localeCompare(b.title));
  }