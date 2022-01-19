const UserList = [
  {
    id: 1,
    name: "john",
    username: "john award",
    age: 20,
    nationality: "CANADA",
    friends: [
      {
        id: 1,
        name: "Rafe",
        username: "Rafe Hardly",
        age: 27,
        nationality: "BANGLADESH",
      },
      {
        id: 2,
        name: "Rafe",
        username: "Rafe Hardly",
        age: 27,
        nationality: "BANGLADESH",
      },
    ],
  },
  {
    id: 2,
    name: "Pedro",
    username: "PedroTech",
    age: 23,
    nationality: "BRAZIL",
  },
  {
    id: 3,
    name: "Sarah",
    username: "Cameron Son",
    age: 25,
    nationality: "INDIA",
    friends: [
      {
        id: 1,
        name: "Rafe",
        username: "Rafe Hardly",
        age: 27,
        nationality: "BANGLADESH",
      },
    ],
  },
  {
    id: 4,
    name: "Rafe",
    username: "Rafe Hardly",
    age: 27,
    nationality: "BANGLADESH",
    friends: [
      {
        id: 1,
        name: "Rafe",
        username: "Rafe Hardly",
        age: 27,
        nationality: "BANGLADESH",
      },
    ],
  },
];

const MovieList = [
  {
    id: 1,
    name: "The Shawshank Redemption ",
    yearOfPublication: 1994,
    isInTheaters: true,
  },
  {
    id: 2,
    name: "The Godfather",
    yearOfPublication: 1972,
    isInTheaters: true,
  },
  {
    id: 3,
    name: "The Dark Knight",
    yearOfPublication: "2008",
    isInTheaters: true,
  },
  {
    id: 4,
    name: "12 Angry Men ",
    yearOfPublication: 1957,
    isInTheaters: true,
  },
];
module.exports = { UserList, MovieList };
