learningApp.factory('Book', function(Restangular) {
  var baseBooks = Restangular.all('books');

  return {
    all: function() { return baseBooks.getList(); },
    start: function(book) { book.status = 1; },
    pause: function(book) { book.status = 2; },
    trash: function(book) { return book.remove(); },
    add: function(data) { return baseBooks.post({ book: data}) },
    filterByStatus: function(books, status) {
      return _.filter(books, function(book) { return book.status == status });
    }
  };
});
