function createLibrary(libraryString) {
  return {
    name: libraryString,
    shelves: {
      fantasy:[],
      fiction:[],
      nonFiction:[]
    }
  };
}

function addBook(libraryName, bookName) {
  libraryName.shelves[bookName.genre].push(bookName);
}
// PE: That was tough. My original code was:
// function addBook(libraryName, bookName) {
//  libraryName.shelves.fantasy.push(bookName);
//
// Knowing when to use bracket notation is KEY.

//  function checkoutBook(libraryName, bookName, genre) {
//     var shelf = libraryName.shelves[genre]
//   for (var i = 0; i < shelf.length; i++) {
//       if (shelf[i].title === bookName) {
//         shelf.splice(i, 1)
//         return `You have now checked out ${bookName} from the ${libraryName.name}.`;
//       } 
//         return `Sorry, there are currently no copies of ${bookName} available at the ${libraryName}`
//     } 
//   }

  function checkoutBook(libraryName, bookName, genre) {
    var shelf = libraryName.shelves[genre];
    for (var i = 0; i < shelf.length; i++) {
      if (shelf[i].title === bookName) {
        shelf.splice(i, 1);
        return `You have now checked out ${bookName} from the ${libraryName.name}.`;
      }
    }
    return `Sorry, there are currently no copies of ${bookName} available at the ${libraryName.name}.`;
  }
  
// PE: forgot .name in the return statements at first...
    
function takeStock(library, genre) {
  if (genre === undefined) {
    return `There are a total of ${totalCount} books at the ${library.name}.`
  }
  
  
  var shelf = library.shelves[genre];
  var count = shelf.length;
  return `There are a total of ${count} ${genre} books at the ${library.name}.`;
}
 
// PE: I really can't finish this one, need to seek out help for it.








module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};