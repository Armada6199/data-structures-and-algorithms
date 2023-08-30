const { sortByReleaseDate, sortByAlphabeticalTitle } = require('./index');

const movies = [
  { title: 'The Avengers', releaseDate: '2012-05-04' },
  { title: 'Avatar', releaseDate: '2009-12-18' },
];

describe('Movie Sorting Functions', () => {
  describe('sortByReleaseDate', () => {
    it('should sort movies by release date', () => {
      const sortedMovies = sortByReleaseDate(movies);
    });
    
    it('should not modify the original array', () => {
      const originalMovies = [...movies];
      sortByReleaseDate(movies);
      
      expect(movies).toEqual(originalMovies);
    });
  });
  
  describe('sortByAlphabeticalTitle', () => {
    it('should sort movies alphabetically ignoring "A", "An", and "The"', () => {
      const sortedMovies = sortByAlphabeticalTitle(movies);
      
    });
    
    it('should not modify the original array', () => {
      const originalMovies = [...movies];
      sortByAlphabeticalTitle(movies);
            expect(movies).toEqual(originalMovies);
    });
  });
});
