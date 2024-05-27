// Null object pattern
// https://en.wikipedia.org/wiki/Null_object_pattern

//scerio
/*
USE CASE
1. check has Image or not
2. check is user login 

*/

// CASE1 : check is user login

class User {
  constructor(id,name) {
    this.id = id;
    this.name = name;
  }
  hasAccess() {
    return this.name === "admin";
  }
}

// create null user
class NullUser {
  constructor() {
    this.id = -1;
    this.name = "Guest";
  }
  hasAccess() {
    return false;
  }
}

const users = [new User(1, "admin"), new User(2, "user")];

// check null user since getUser will return null if user is not found
function getUser(id) {
  const user = users.find((user) => user.id === id);
  if (user === null) return new NullUser();
  else return user;
}

function printUser(id) {
  const user = getUser(id);

  console.log("hello " + user.name);
  if (user.hasAccess()) {
    console.log("Welcome");
  } else {
    console.log("No access");
  }
}
