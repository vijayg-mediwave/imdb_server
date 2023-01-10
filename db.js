// const { users, movies, ratings } = require("./models");

// const findUser = ({ userName, userId }) => {
//   return users.find((u) => u.username == userName || u.id == userId);
// };

// const findMovieInfo = ({ movieId }) => {
//   //console.log(movieId);
//   const movie = movies.find((m) => m.id === movieId);
//   if (movie) {
//     const user = findUser({ userId: movie.createdByUser });
//     movie.createdByUser = user;
//   }
//   return movie;
// };

// const findRating = ({ movieId }) => {
//   //console.log(movieId);
//   const rating = ratings
//     .filter((r) => r.movie === movieId)
//     .map((movie) => {
//       return movie.rating;
//     });
//   let overAllRating = 0;
//   for (let i = 0; i < rating.length; i++) {
//     overAllRating += rating[i];
//   }
//   const avrageRating = overAllRating / rating.length;
//   return avrageRating.toFixed(1);
// };



// module.exports = {
//   findUser,
//   findMovieInfo,
//   findRating,
// };
