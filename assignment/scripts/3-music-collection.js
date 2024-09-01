console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];
console.log(myCollection);
function addToCollection(collection, title, artist, yearPublished){
  Album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished 
  };
  collection.push(Album);

  return Album;

}

console.log(addToCollection(myCollection,'When I was Your Man','Bruno Mars', 2012));
console.log(addToCollection(myCollection,'Gata Only','Floyymenor', 2024));
console.log(addToCollection(myCollection,'Heartless','Kanye West', 2008));
console.log(addToCollection(myCollection,'You Belong With Me' , 'Taylor Swift' , 2021));
console.log(addToCollection(myCollection,'Trance','Metro Boomin & Travis Scott', 2022));
console.log(addToCollection(myCollection,'Sad Girl', 'Lana Del Ray', 2013));
console.log(myCollection);

function showCollection(collection){
  for(let Album of collection){
  console.log(`${Album.title} by ${Album.artist}, was published in ${Album.yearPublished}`);
  }
}
showCollection(myCollection);

function findByArtist(collection, artist){

}






// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
