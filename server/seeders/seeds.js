const faker = require('faker');

const db = require('../config/connection');
const { User, Movies } = require('../models');


db.once('open', async () => {
  await Thought.deleteMany({});
  await User.deleteMany({});
  await Movies.deleteMany({});

  
  const movieData = [
    {
      movieTitle: 'Spiderman',
      movieUrl: 'https://www.themoviedb.org/movie/559-spider-man-3?language=en-US',
      moviePicUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qFmwhVUoUSXjkKRmca5yGDEXBIj.jpg'
    },
    {
      movieTitle: 'Sing2',
      movieUrl: 'https://www.themoviedb.org/movie/438695-sing-2?language=en-US',
      moviePicUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg'
    },
    {
      movieTitle: 'Shang-Chi',
      movieUrl: 'https://www.themoviedb.org/movie/566525-shang-chi-and-the-legend-of-the-ten-rings?language=en-US',
      moviePicUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg'
    },
    {
      movieTitle: 'Ghostbusters: Afterlife',
      movieUrl: 'https://www.themoviedb.org/movie/425909-ghostbusters-afterlife?language=en-US',
      moviePicUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sg4xJaufDiQl7caFEskBtQXfD4x.jpg'
    },
    {
      movieTitle: 'Encanto',
      movieUrl: 'https://www.themoviedb.org/movie/568124-encanto?language=en-US',
      moviePicUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg'
    },
    {
      movieTitle: 'Matrix',
      movieUrl: 'https://www.themoviedb.org/movie/624860-the-matrix-resurrections?language=en-US',
      moviePicUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8c4a8kE7PizaGQQnditMmI1xbRp.jpg'
    },
    {
      movieTitle: 'The Ice Age Adventures of Buck Wild',
      movieUrl: 'https://www.themoviedb.org/movie/774825-the-ice-age-adventures-of-buck-wild?language=en-US',
      moviePicUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zzXFM4FKDG7l1ufrAkwQYv2xvnh.jpg'
    },
    {
      movieTitle: 'Red Notice',
      movieUrl: 'https://www.themoviedb.org/movie/512195-red-notice?language=en-US',
      moviePicUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lAXONuqg41NwUMuzMiFvicDET9Y.jpg'
    },
  ]

 const createdMovies = await Movies.collection.insertMany(movieData);


  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);


// create likedMovies
for (let i = 0; i < 100; i += 1) {
  const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  const { _id: userId } = createdUsers.ops[randomUserIndex];
  let movieId;
  for (let i =0; i < (Math.floor(Math.random() * 10)); i += 1) {
    const randomMovieIndex = Math.floor(Math.random() * createdMovies.ops.length);
    movieId = createdMovies.ops[randomMovieIndex];
  }
  // add the movie to User.likedMovies
  await User.updateOne({ _id: userId }, { $addToSet: { likedMovies: movieId } });
  // add the user to Movie.likedUsers
  await Movies.updateOne({ _id: movieId }, { $addToSet: { likedUsers: userId } });
}

// create dislikedMovies
for (let i = 0; i < 100; i += 1) {
  const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  const { _id: userId } = createdUsers.ops[randomUserIndex];
  let movieId;
  for (let i =0; i < (Math.floor(Math.random() * 10)); i += 1) {
    const randomMovieIndex = Math.floor(Math.random() * createdMovies.ops.length);
    movieId = createdMovies.ops[randomMovieIndex];
  }
  // add the movie to User.dislikedMovies
  await User.updateOne({ _id: userId }, { $addToSet: { dislikedMovies: movieId } });
  // add the user to Movie.dislikedUsers
  await Movies.updateOne({ _id: movieId }, { $addToSet: { dislikedUsers: userId } });
}

console.log('all done!');
process.exit(0);
});