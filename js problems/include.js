// const lyrics = 'Welcome to Everyone';

// const doesExist = lyrics.includes('Welcome');
// const doExist = lyrics.includes('in');

// console.log(doesExist);
// console.log(doExist);



// const lyrics = 'Welcome to Everyone';

// const searchString = 'to';

// const doesExist = lyrics.includes('Welcome');
// const doExist = lyrics.includes('in');
// const doesExist = lyrics.includes(searchString);
// console.log(doesExist);
// console.log(doExist);


// const lyrics = 'Welcome to Everyone';

// const searchString = 'to';

// const lyricsLowerCase = lyrics.toLowerCase()

// const doesExist = lyrics.includes(searchString);
// console.log(doesExist);




// const lyrics = 'Welcome to Everyone';

// const searchString = 'to';

// const lyricsLowerCase = lyrics.toLowerCase()

// const searchStringLower = searchString.toLowerCase();


// const doesExist = lyricsLowerCase.includes(searchStringLower);
// const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);
// console.log(doesExistOneLine);




// const lyrics = 'Welcome to you, ahnaf';

// const searchString = 'to';

// const lyricsLowerCase = lyrics.toLowerCase()

// const searchStringLower = searchString.toLowerCase();


// const doesExist = lyricsLowerCase.includes(searchStringLower);
// const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(lyrics.indexOf('ahnaf'));



const lyrics = 'Welcome to you, ahnaf';

const searchString = 'to';

const lyricsLowerCase = lyrics.toLowerCase()

const searchStringLower = searchString.toLowerCase();


const doesExist = lyricsLowerCase.includes(searchStringLower);
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(lyrics.indexOf('ahnaaf'));
console.log(lyrics.indexOf('to'));

if (lyrics.indexOf('you') !== -1) {

    console.log('exists in');
}
else {


    console.log('not exists in');
}

console.log(lyrics.startsWith('Welcome'));


const fileName = 'mybiodata.doc';
const otherName = 'mypic.img';


fileName.endsWith('.doc');
// console.log(lyrics.startsWith('Welcome'));