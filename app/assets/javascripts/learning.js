var learningApp = angular.module('learning', [
    'ngRoute',
    'restangular'
    ]);

learningApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/books.html',
      controller: 'booksCtrl'
    })
});

learningApp.controller('booksCtrl', function($scope, Book) {

  window.books = $scope.books;
  $scope.newBook = { status: 1 };

  // set up initial data for Books
  Book.all().then(function(books) {
    $scope.books = books;

    $scope.currentlyReading = function() { return Book.filterByStatus($scope.books, 1) };
    $scope.readingNext = function() { return Book.filterByStatus($scope.books, 2) };
    $scope.alreadyRead = function() { return Book.filterByStatus($scope.books, 3) };
  });

  // handle events carried out on Books
  $scope.addBook = function() { Book.add(this.newBook) }
  $scope.start = function(book) { Book.start(book) }
  $scope.pause = function(book) { Book.pause(book) }

  $scope.trash = function(book) {
    Book.trash(book).then(function() {
      $scope.books = _.without($scope.books, book);
    });
  }

  $scope.addBook = function() {
    Book.add(this.newBook).then(function(book) {
      $scope.books.push(book);
      $scope.newBook = {};
    });
  };

});
