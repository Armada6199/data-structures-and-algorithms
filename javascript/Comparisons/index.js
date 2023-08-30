 function sortByReleaseDate(movies) {
    return movies.slice().sort((a, b) => a.year - b.year);
  }
  
  function sortByAlphabeticalTitle(movieList) {
    return movieList.slice().sort((a, b) => {
      const getTitleWithoutPrefix = title => title.replace(/^(A|An|The)\s+/i, '');
      const titleA = getTitleWithoutPrefix(a.title);
      const titleB = getTitleWithoutPrefix(b.title);
      return titleA.localeCompare(titleB);
    });
  }
  module.exports={
    sortByReleaseDate,
    sortByAlphabeticalTitle
  }