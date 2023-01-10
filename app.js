// const { findUser, findMovieInfo, findRating} = require("./db");

// const user = findUser({
//   userId: "1673333509325",
// });

// const movie = findMovieInfo({
//   movieId: "1",
// });

// const rating = findRating(
//   { movieId: "1" }
// );

// //console.log(user);
// //console.log(movie);
// console.log(rating);
const env = require("dotenv");

env.config();

const db = require("./models/index");

const main = async () => {
  try {
    await db.sequelize.sync();
    return console.log("Synced db.");
  } catch (error) {
    console.log(error);
  }
};
main();
