const { sortByReleaseDate, sortByTitleAlphabetically } = require('./index');

describe('Movie Sorting Functions', () => {
  const movies = [
    { title: "Movie C", year: 2010, genres: ["Drama", "Action"] },
    { title: "Movie A", year: 2005, genres: ["Comedy"] },
    { title: "Movie B", year: 2015, genres: ["Adventure", "Fantasy"] }
  ];

  test('Sort movies by release date', () => {
    const sortedMovies = sortByReleaseDate(movies);
    const expectedSortedMovies = [
      { title: "Movie A", year: 2005, genres: ["Comedy"] },
      { title: "Movie C", year: 2010, genres: ["Drama", "Action"] },
      { title: "Movie B", year: 2015, genres: ["Adventure", "Fantasy"] }
    ];

    expect(sortedMovies).toEqual(expectedSortedMovies);
  });

  test('Sort movies alphabetically by title', () => {
    const sortedMovies = sortByTitleAlphabetically(movies);
    const expectedSortedMovies = [
      { title: "Movie A", year: 2005, genres: ["Comedy"] },
      { title: "Movie B", year: 2015, genres: ["Adventure", "Fantasy"] },
      { title: "Movie C", year: 2010, genres: ["Drama", "Action"] }
    ];

    expect(sortedMovies).toEqual(expectedSortedMovies);
  });
});
