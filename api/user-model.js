let id = 0;

function getId() {
  return ++id;
}

let users = [
  {
    id: getId(),
    username: "Mario",
    password: "redBro",
  },
  {
    id: getId(),
    username: "Luigi",
    pasword: "greenBro",
  },
];

module.exports = {
  async findAll() {
    return users;
  },
  async create({ username, password }) {
    const newUser = { id: getId(), username, password };
    users.push(newUser);
    return newUser;
  },
};
