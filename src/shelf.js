function shelfBook(sciFiBook, shelf) {
  if (shelf.length < 3) {
   shelf.unshift(sciFiBook);
  }
}
// PE: I am starting to notice that not all functions need a return value. I am still trying to figure out when this is or is not the case.
// PE: Parameter shelf is an empty array, parameter sciFiBook is the object of a book. Unshift will add the book object to the front of the empty array. This function will not run if there is a number of 3 books on the shelf.

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      shelf.splice(i, 1)
    }
  } 
}
//PE: Iterates over the array shelf with a for loop, then identifies if any of the objects contain a title equal to the parameter given, if it does it removes that element.


function listTitles(shelfContents) {
  var emptyArray = [];
  for (var i = 0; i < shelfContents.length; i++) {
    emptyArray.push(shelfContents[i].title);
  }
  console.log(emptyArray)
}
// PE: Struggling way too much on the above problem. Going to work on it later.


function searchShelf(shelfName, bookTitle) { 
  for (var i = 0; i < shelfName.length; i++) {
    if (shelfName[i].title === bookTitle) {
      return true;
    }
  }
  return false;
}
// PE: This function takes in 2 parameters, a shelf(an array) and the title of a book(a string). The function iterates over the array, checking if the title is present in any of the iterations, if it is return true, if it is not return false.


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};