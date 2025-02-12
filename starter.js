const data = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    genre: "Drama",
    releaseYear: 1994,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
    duration: 142, // in minutes
  },
  {
    id: 2,
    title: "The Godfather",
    genre: "Crime",
    releaseYear: 1972,
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino", "James Caan", "Robert Duvall"],
    duration: 175, // in minutes
  },
  {
    id: 3,
    title: "Inception",
    genre: "Sci-Fi",
    releaseYear: 2010,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    director: "Christopher Nolan",
    cast: [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Ellen Page",
      "Tom Hardy",
    ],
    duration: 148, // in minutes
  },
  {
    id: 4,
    title: "Pulp Fiction",
    genre: "Crime",
    releaseYear: 1994,
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Samuel L. Jackson", "Uma Thurman", "Bruce Willis"],
    duration: 154, // in minutes
  },
  {
    id: 5,
    title: "The Dark Knight",
    genre: "Action",
    releaseYear: 2008,
    description:
      "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    director: "Christopher Nolan",
    cast: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Maggie Gyllenhaal",
    ],
    duration: 152, // in minutes
  },
  // New Movie Objects
  {
    id: 6,
    title: "Forrest Gump",
    genre: "Drama",
    releaseYear: 1994,
    description:
      "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
    director: "Robert Zemeckis",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Sally Field"],
    duration: 142, // in minutes
  },
  {
    id: 7,
    title: "The Matrix",
    genre: "Sci-Fi",
    releaseYear: 1999,
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    director: "The Wachowskis",
    cast: [
      "Keanu Reeves",
      "Laurence Fishburne",
      "Carrie-Anne Moss",
      "Hugo Weaving",
    ],
    duration: 136, // in minutes
  },
  {
    id: 8,
    title: "Schindler's List",
    genre: "Biography",
    releaseYear: 1993,
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    director: "Steven Spielberg",
    cast: ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes", "Embeth Davidtz"],
    duration: 195, // in minutes
  },
  {
    id: 9,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genre: "Adventure",
    releaseYear: 2001,
    description:
      "A young hobbit, Frodo Baggins, embarks on a perilous journey to destroy the One Ring and save Middle-earth from the dark lord Sauron.",
    director: "Peter Jackson",
    cast: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen", "Sean Astin"],
    duration: 178, // in minutes
  },
  {
    id: 10,
    title: "Inglourious Basterds",
    genre: "Adventure",
    releaseYear: 2009,
    description:
      "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
    director: "Quentin Tarantino",
    cast: [
      "Brad Pitt",
      "Diane Kruger",
      "Christoph Waltz",
      "Michael Fassbender",
    ],
    duration: 153, // in minutes
  },
];

//return the entire movies
function getMovies() {
  return data;
}

function getMovie(id) {
  return data.find((movie) => movie.id == id);
}

// const movies = getMovies();

// console.log(movies);

// // //fetch the specific movie
// const firstMovie = getMovie(2);
// console.log(firstMovie);

// // object destructuring
// const {title, genre, director} = firstMovie;

// // can use one line with the use of object destructuring instead of this:
// const title = firstMovie.title;
// const genre = firstMovie.genre;
// const author = firstMovie.author;

// console.log(title, genre, director);

// // console.log(movies)
// // ... = rest operator
const movieNine = getMovie(9);
const {title, description, genre , ...others} = movieNine;

// // console.log(others)

// // array destructuring
const [one, ...etc] = movieNine.cast;
console.log(title, description, genre, one);
console.log(etc)

// const numbers = [ 1, 2, 3 ];
// const nambur = [ 4, 5 ,6 ];
// const combinedNum = [...numbers, ...nambur];
// // console.log(combinedNum); 


// // example on fetching all cast of movie 1 and movie 2
// const movieOne = getMovie(1);
// const movieTwo = getMovie(2);
// const combinedCast12 = [...movieOne.cast, ...movieTwo.cast]
// console.log(combinedCast12);

// change variable
const firstMovie = getMovie(1);
// wrong way to update data
firstMovie.director = ["Gab Montano", "Leo Lintag"];
// console.log(firstMovie.director)

// way to update data with api
const updatedMovie = { ...firstMovie, director:"Gab Montano" }
// console.log(updatedMovie)

// console.log(getMovies());

// // change genre variable
// const sample = getMovie(10);
// const updatedGenre = {...sample, genre : "Sci-Fi"}
// console.log(updatedGenre)

// // display all titles
const movies = getMovies();
// for(let i = 0; i < 10; i++;){
//   console.log(movies[i].title);
// }

// for(movie in movies){
//   console.log(movies[movie].title)
// }

// movies.forEach(movie=>console.log(movie.title));

// filter movies per year
const newMovie = movies.filter(m => m.releaseYear >= 2000);
// console.log(newMovie)
const sortedByYear = movies.sort(m => m.releaseYear);

// console.log(sortedByYear)