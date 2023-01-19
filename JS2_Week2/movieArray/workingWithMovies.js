// 1. Create an array of movies containing the movies with a short title
let shortTitledMovies = movies
    .filter((movieName) => movieName.title.length < 5)
    .map((movieName) => movieName.title);
console.log(shortTitledMovies);
console.log(shortTitledMovies.length);

/*


//2. Create an array of movie titles with long movie titles
let longTitledMovies = movies
    .filter((movieTitle) => movieTitle.title.length > 45)
    .map((movie) => movie.title)
console.log(longTitledMovies);
console.log(longTitledMovies.length);


// 3. Count the number of movies made between 1980-1989 (including both the years)

let countMovie = movies
    .filter((count) => count.year >= 1980 && count.year <= 1989)
    .map((count) => count.title)
console.log(countMovie);
console.log(countMovie.length);


// 4. Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

const goodMovies = movies
    .filter((goodTag) => goodTag.rating >= 7)
    .map((goodTaggedMovies) => Object.assign(goodTaggedMovies, { tag: "Good" }))
console.log(goodMovies.length);
console.log(goodMovies);


const averageMovies = movies
    .filter((averageTag) => averageTag.rating >= 4 && averageTag.rating < 7)
    .map((averageTaggedMovies) => Object.assign(averageTaggedMovies, { Tag: "Average" }))
console.log(averageMovies.length);
console.log(averageMovies);


const badMovies = movies
    .filter((badTag) => badTag.rating < 4)
    .map((badTaggedMovies) => Object.assign(badTaggedMovies, { Tag: "Bad" }))
console.log(badMovies.length);
console.log(badMovies);


console.log(movies.length);


// 5. Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.

const sixRatedMovies = movies
    .filter((rating6) => rating6.rating > 6)
    .map((movieRatedSix) => movieRatedSix.rating)
console.log(sixRatedMovies.length);
console.log(sixRatedMovies);


// 6. Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. Can you make sure the search is case insensitive?

cnst movieKeyword = movies
    .ilter((keyword) => keyword.title.toLowerCase().includes("alien") || keyword.title.toLowerCase().includes("benjamin") || keyword.title.toLowerCase().includes("surfer"))
    .map((keyword) => keyword.title);
console.log(movieKeyword.length);
console.log(movieKeyword);


// 7. Create an array of movies where a word in the title is duplicated. Fx "Star Wars: The Clone Wars" the word Wars is duplicated. Here are some madeup examples of movies with duplicated words in the title: "The three men and the pistol", "Chase three - The final chase"

const taggedMovies = movies.map((ratingTag) => {
    if (ratingTag.rating >= 7) {
        Object.assign(movies, { Tag: "Good" })
    } else if (ratingTag.rating <= 7 && ratingTag.rating >= 4) {
        Object.assign(movies, { Tag: "Average" })
    } else {
        Object.assign(movies, { Tag: "Bad" })
    }
})
console.log(taggedMovies);


// 8. Calculate the average rating of all the movies using reduce. Optional
/* 

const averageMovieRating = movies.map((movie) => movie.rating).reduce((accumulator, currentValue) => accumulator + currentValue)  / movies.length
console.log(averageMovieRating);

*/

/*
const averageMovies = movies
  .filter((averageTag) => averageTag.rating >= 4 && averageTag.rating < 7)
  .map((averageTaggedMovies) => Object.assign(averageTaggedMovies, { Tag: "Average" }))
console.log(averageMovies.length);
console.log(averageMovies);
*/


/* 9. Count the total number of Good, Average and Bad movies using reduce. A return could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123} Optional
*/




































