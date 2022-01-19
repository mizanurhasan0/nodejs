const { UserList, MovieList } = require("../fakeData");
const _ = require("lodash");

const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    user: (root, args) => {
      const id = args.id;
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },

    movies: () => {
      return MovieList;
    },
    movie: (root, args) => {
      const name = args.name;
      const movie = _.find(MovieList, { name: name });
      return movie;
    },
  },
  User: {
    favoriteMovies: () => {
      return _.filter(
        MovieList,
        (movie) =>
          movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
      );
    },
  },

  Mutation: {
    CreateUser: (root, args) => {
      const user = args.input;
      const lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;
      UserList.push(user);
      return user;
    },

    UpdateUserName: (root, args) => {
      const { id, newUsername } = args.input;
      let userUpdated;

      UserList.forEach((user) => {
        if (user.id === Number(id)) {
          user.username = newUsername;
          userUpdated = user;
        }
      });
      console.log(userUpdated);
      return userUpdated;
    },

    DeleteUser: (root, args) => {
      const userId = args.id;

      console.log(userId);
      _.remove(UserList, (User) => User.id === Number(userId));
      return null;
    },
  },
};

module.exports = { resolvers };
