
const one = (user, authUser) => ({
  id: user.id,
  username: user.username,
  name: user.name,
  surname: user.surname,
  email: user.email,
  active: user.active,
  idRole: user.idRole,
  created_at: user.created_at,
  updated_at: user.updated_at
});

const many = (users, authUser) => users.map((user) => one(user, authUser));

module.exports = {
  one,
  many,
};
