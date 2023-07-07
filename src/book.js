function createTitle(bookName) {
  return `The ` + bookName;
}

function buildMainCharacter(charName, charAge, charPronouns) {
  return {
    name: charName,
    age: charAge,
    pronouns: charPronouns
  };
}

function saveReview(reviewName, emptyArray)  {
  if (emptyArray.includes(reviewName)) {
    return;
  } else {
    emptyArray.push(reviewName)
  }
} 

function calculatePageCount(bookName) {
  return bookName.length * 20
}



// PE: Here is the solution I came up with.
function writeBook(bookTitle, protagonist, bookInfo) {
  return {
    title: bookTitle,
    mainCharacter: protagonist,
    pageCount: bookTitle.length * 20,
    genre: bookInfo
    
  }
}

// PE: This is another way to accompish it.

// function writeBook(bookTitle, protagonist, bookInfo) {
//   var pageCalc = bookTitle.length * 20;
//   return {
//     title: bookTitle,
//     mainCharacter: protagonist,
//     pageCount: pageCalc,
//     genre: bookInfo
    
//   }
// }


// PE: & This is Nicoles version... I am leaving it here to referece!

// function writeBook(title, character, genre, pages) {
//   var book = {
//     title: `${title}`,
//     mainCharacter: `${character}`,
//     genre: `${genre}`,
//     pageCount: `${title.length * 20}`,
//   };
//   return book;
// }

function editBook(ghoul) {
  ghoul.pageCount = ghoul.pageCount * 0.75;
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}